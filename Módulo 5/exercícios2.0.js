function calculoFaturamentoSemanal(vendas) {
    let totalVendasSemana = 0

    for (diaSemana in vendas) {
        totalVendasSemana += vendas[diaSemana] * 10
    }

    return totalVendasSemana
}

let vendasSemana = {
    segunda : 10,
    terca : 20,
    quarta : 30,
    quinta : 40,
    sexta : 50
}

const resultado = calculoFaturamentoSemanal(vendasSemana)

console.log(`O total vendas na lanchonete em uma semana foi de: R$${resultado}`)