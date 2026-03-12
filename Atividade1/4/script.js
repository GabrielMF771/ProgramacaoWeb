let linhas = window.prompt("Digite o número de linhas que deseja:");

for (let i = 1; i <= linhas; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
        linha += "* ";
    }
    console.log(linha);
    document.writeln(linha + "<br>");
}