import CalculadoraService from "./calculadora.service";

describe("Teste do CalculadoraService", () => {
  // O describe é basicamente você descrever o que você vai fazer de teste.

  const [
    calcular,
    concatenarNumero,
    adicao,
    diminuir,
    dividir,
    multiplicar,
  ] = CalculadoraService();

  it("Deve garantir que 1 + 4 = 5", () => {
    let soma = calcular(1, 4, adicao);
    expect(soma).toEqual(5);
  });

  it("Deve garantir que 1 - 4 = -3", () => {
    let subtracao = calcular(1, 4, diminuir);
    expect(subtracao).toEqual(-3);
  });

  it("Deve garantir que 1 / 4 = 0.25", () => {
    let divisao = calcular(1, 4, dividir);
    expect(divisao).toEqual(0.25);
  });

  it("Deve garantir que 1 * 4 = 4", () => {
    let multiplicacao = calcular(1, 4, multiplicar);
    expect(multiplicacao).toEqual(4);
  });

  it("Deve retornar 0 para operação inválida", () => {
    let operacaoInvalida = calcular(1, 4, "%");
    expect(operacaoInvalida).toEqual(0);
  });
});
