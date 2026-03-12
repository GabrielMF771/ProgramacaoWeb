let n = parseInt(prompt("Digite o número de termos:"));

let soma = 0;
let termos = [];

for (let i = 1; i <= n; i++) {
    let termo = parseInt("1".repeat(i));
    termos.push(termo);
    soma += termo;
}

let serie = termos.join(" + ");
console.log(serie);
document.writeln(serie + "<br>");

console.log("A soma é: " + soma);
document.writeln("A soma é: " + soma);
