function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let resposta = getRandomInt(1, 20);

// console.log("Número sorteado: " + resposta);

let chute = window.prompt("Tente adivinhar o número entre 1 e 20");

while (chute != resposta) {
    if (chute < resposta) {
        chute = window.prompt("O número é maior. Tente novamente");
    } else {
        chute = window.prompt("O número é menor. Tente novamente");
    }
}

alert("Parabéns! Você acertou o número!");