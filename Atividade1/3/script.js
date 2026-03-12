let numero = window.prompt("Digite o número que deseja verificar a tabuada:");

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
    document.writeln(`${numero} x ${i} = ${resultado}<br>`);
}
