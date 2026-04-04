const precos = {
  gasolina: 6.69,
  etanol: 5.80,
  diesel: 6.20
};

const calcularAbastecimento = (precoCombustivel, litros) => {
  let valorTotal = precoCombustivel * litros;

  if (valorTotal < 0 || isNaN(valorTotal)) {
    valorTotal = 0;
  }

  const formatado = valorTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  document.getElementById("resultado").textContent = formatado;
};

const atualizarValor = () => {
  const tipoElemento = document.getElementById("combustivel");
  const litrosElemento = document.getElementById("litros");

  const tipo = tipoElemento.value;
  const litrosTexto = litrosElemento.value;

  if (litrosTexto.trim() === "") {
    alert("Por favor, preencha a quantidade de litros.");
    document.getElementById("resultado").textContent = "0,00";
    return;
  }

  const litros = parseFloat(litrosTexto);
  const precoPorLitro = precos[tipo];

  if (!precoPorLitro) {
    document.getElementById("resultado").textContent = "0,00";
    return;
  }

  if (isNaN(litros) || litros < 0) {
    alert("Insira um número válido e maior que zero para os litros.");
    document.getElementById("resultado").textContent = "0,00";
    return;
  }

  console.log(tipo);
  console.log(precoPorLitro);

  calcularAbastecimento(precoPorLitro, litros);
};

const tipo = document.getElementById("combustivel");
tipo.addEventListener("change", atualizarValor);

const litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);

litros.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    atualizarValor();
  }
});