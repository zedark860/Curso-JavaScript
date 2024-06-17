const faturamento = [
  150_000, 110_000, 90_000, 70_000, 100_000, 120_000, 130_000, 95_000, 120_000,
  130_000, 120_000, 165_000,
];

// Todos não promovem mutação, geram um novo array

// map

const faturamentoEmReais = faturamento.map(
  (valorFaturamentoMensal) => valorFaturamentoMensal * 4.79
);

console.log(faturamentoEmReais);

// filter

const faturamentoMaiorDoQueDesejado = faturamento.filter(
  (valorFaturamentoMensal) => valorFaturamentoMensal >= 130_000
);

// ou

const faturamentoMaiorDoQueDesejadoTeste = faturamento.filter(
  (valorFaturamentoMensal) => {
    if (valorFaturamentoMensal >= 130_000) {
      return valorFaturamentoMensal;
    }
  }
);

console.log(faturamentoMaiorDoQueDesejado);

// reduce

const faturamentoAnual = faturamento.reduce((acumulador, elementoAtual) => {
  return acumulador + elementoAtual;
}, 0);

console.log(`O faturamento anual foi de ${faturamentoAnual}`);
console.log(`O faturamento médio do último ano foi de ${faturamentoAnual / faturamento.length}`);
