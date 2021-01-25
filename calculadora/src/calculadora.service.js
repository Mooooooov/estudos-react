function CalculadoraService() {
  const adicao = "+";
  const diminuir = "-";
  const dividir = "/";
  const multiplicar = "*";
  function Calcular(num1, num2, operacao) {
    let resultado;

    switch (operacao) {
      case adicao:
        return (resultado = num1 + num2);
      case diminuir:
        return (resultado = num1 - num2);
      case dividir:
        return (resultado = num1 / num2);
      case multiplicar:
        return (resultado = num1 * num2);
      default:
        return 0;
    }
    return resultado;
  }

  function concatenarNumero(numAtual, numConcat) {
    if (numAtual === "0" || numAtual === null) {
      // Se o numero na calculadora for igual a 0 ou igual a nada, ele retorna uma string vazia.
      return (numAtual = "");
    }
    if (numConcat === "." && numAtual === "") {
      // Se eu digitar . sem nenhum número antecessor, ele autocompleta com um 0.
      return "0.";
    }
    if (numConcat === "." && numAtual.indexOf(".") > -1) {
      // Se eu colocar mais de 1 ponto no numero atual, ele retorna o numero atual, impossibilitando que ele adicione mais de um ponto.
      // O -1 no indexOf caracteriza que existe mais de 1 ponto no número atual.
      return numAtual;
    }

    return numAtual + numConcat;
  }

  return [Calcular, concatenarNumero, adicao, diminuir, dividir, multiplicar];
}

export default CalculadoraService;
