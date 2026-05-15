const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 3000

// In-memory array para armazenar os feedbacks
let feedbacks = [];
let nextId = 1;

// Ver a URL sendo recebida do formulário
app.use(express.urlencoded({extended: true}));

// Informar que os arquivos estáticos (html,css,js e img) estão na pasta public
app.use(express.static("public"));

// Rota 1: Página Inicial (/)
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

// Rota 2: Cadastro de Feedbacks
app.post('/feedbacks/enviar', (req, res) => {
    const { nome, comentario } = req.body;
    if (nome && comentario) {
        feedbacks.push({ id: nextId++, nome, comentario });
    }
    res.redirect('/feedbacks/lista');
})

// Rota 3: Listagem de Feedbacks
app.get('/feedbacks/lista', (req, res) => {
    // Lê o arquivo HTML próprio da página de lista
    const htmlPath = path.join(__dirname, 'public', 'lista.html');
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    let feedbacksHtml = '';
    
    if (feedbacks.length === 0) {
        feedbacksHtml = '<li class="empty-message">Nenhum feedback recebido ainda.</li>';
    } else {
        for (const fb of feedbacks) {
            feedbacksHtml += `
                <li>
                    <div class="feedback-content">
                        <strong>${fb.nome}</strong>: ${fb.comentario}
                    </div>
                    <form action="/feedbacks/remover" method="POST" style="margin: 0;">
                        <input type="hidden" name="id" value="${fb.id}">
                        <button type="submit" class="btn-remove">Remover</button>
                    </form>
                </li>
            `;
        }
    }
    
    // Substitui o placeholder pelo conteúdo gerado e envia o HTML
    html = html.replace('<!-- FEEDBACK_ITEMS -->', feedbacksHtml);
    res.send(html);
})

// Rota 4: Remoção de Feedback
app.post('/feedbacks/remover', (req, res) => {
    const id = parseInt(req.body.id);
    feedbacks = feedbacks.filter(fb => fb.id !== id);
    res.redirect('/feedbacks/lista');
})

app.listen(port, () => {
    console.log(`Feedback app listening on port ${port}`)
})

