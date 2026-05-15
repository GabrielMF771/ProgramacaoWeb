# Atividade 5 - Node.js e Express

Você foi contratado para desenvolver uma aplicação simples de coleta de feedbacks de alunos para um curso online. A aplicação deve ser desenvolvida utilizando o framework Express.js, sem uso de banco de dados ou APIs externas. Os dados serão mantidos apenas em memória (array) durante a execução do servidor.

O sistema deve atender aos seguintes requisitos:

1. Página Inicial (/)
    - Deve conter um formulário HTML onde o usuário poderá preencher seu nome e um comentário (feedback).
    - O formulário deve usar o método POST e encaminhar os dados para o servidor.
2. Rota de Cadastro de Feedbacks (/feedbacks/enviar)
    - Ao enviar o formulário, o servidor deve armazenar o feedback em memória (array).
    - Depois disso, o usuário deve ser redirecionado para a página de lista de feedbacks.
3. Rota de Listagem de Feedbacks (/feedbacks/lista)
    - Essa página deve exibir todos os feedbacks enviados até o momento.
    - Cada item da lista deve mostrar o nome do autor e seu comentário.
    - Cada feedback deve ter um botão "Remover", que envia uma requisição POST para excluir o comentário.
4. Rota de Remoção de Feedback (/feedbacks/remover)
    - Ao clicar em "Remover", o feedback correspondente deve ser excluído da lista e a página de listagem deve ser atualizada.

**Observação importante:** A atividade contempla temas ainda não abordados em sala de aula, mas serve como um preparo para os próximos conteúdos e ajuda a reforçar o aprendizado de forma prática.