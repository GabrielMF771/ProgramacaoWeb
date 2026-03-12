function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let resposta = getRandomInt(1, 3);

// console.log("Resposta: " + resposta);

let chute = window.prompt("Pedra papel ou tesoura? (1 - Pedra, 2 - Papel, 3 - Tesoura)");

if (chute == resposta) {
    alert("Empate!");
}
else if ((chute == 1 && resposta == 3) || (chute == 2 && resposta == 1) || (chute == 3 && resposta == 2)) {
    alert("Parabéns! Você ganhou!");
}
else {
    alert("Que pena! Você perdeu!");
}