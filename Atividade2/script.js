// Contador
let incrementar = document.getElementById("incrementar");
let decrementar = document.getElementById("decrementar");
let resultado1 = document.getElementById("resultado1");

incrementar.addEventListener("click", function() {
    let valor = parseInt(resultado1.textContent);
    valor++;
    resultado1.textContent = valor;
});

decrementar.addEventListener("click", function() {
    let valor = parseInt(resultado1.textContent);
    if (valor > 0) {
        valor--;
    } else {
        alert("O valor não pode ser negativo.");
    }
    resultado1.textContent = valor;
});

let texto = document.getElementById("texto");
let resultado2 = document.getElementById("resultado2");

// Contador de caracteres
texto.addEventListener("input", function() {
    let valor = texto.value.length;
    resultado2.textContent = valor;
});

// Adicionar texto ao pressionar Enter
let textos = document.getElementById("textos");

texto.addEventListener("keydown", function(event) {
    if(event.key == "Enter")
        textos.innerHTML += "<p>" + texto.value + "</p>";
    }
);

texto.addEventListener("keydown", function(event) {
    if(event.key == "Enter")
        texto.value = "";
    }
);

// Adicionar listas
let selecao = document.getElementById("selecao");
let btnAdicionar = document.getElementById("btnAdicionar");
let listas = document.getElementById("listas");

btnAdicionar.addEventListener("click", function() {
    let tipoLista = selecao.value;
    let novaLista;
    if (tipoLista === "Lista Ordenada") {
        novaLista = document.createElement("ol");
    }
    else {
        novaLista = document.createElement("ul");
    }
    for (let i = 1; i <= 3; i++) {
        let item = document.createElement("li");
        item.textContent = "Item " + i;
        novaLista.appendChild(item);
    }
    listas.appendChild(novaLista);
});

// Botão de reset
let btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", function() {
    resultado1.textContent = "0";
    resultado2.textContent = "0";
    texto.value = "";
    textos.innerHTML = "";
    listas.innerHTML = "";
});