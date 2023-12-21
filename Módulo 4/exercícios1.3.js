function desempenhoIndividual(vendasPorFuncionario) {
    let porcentagemVenda = 0
    const meta = 18_000
    for (const funcionario in vendasPorFuncionario) {
        porcentagemVenda = (vendasPorFuncionario[funcionario] / meta) * 100

        if (porcentagemVenda >= 100) {
            console.log(`${funcionario} teve um Excelente Desempenho`)
        } else if (porcentagemVenda >= 90 && porcentagemVenda <=99) {
            console.log(`${funcionario} teve um Desempenho Muito Bom`)
        } else if (porcentagemVenda >= 80 && porcentagemVenda <= 89) {
            console.log(`${funcionario} teve um Bom Desempenho`)
        } else if (porcentagemVenda >= 61 && porcentagemVenda <= 79) {
            console.log(`${funcionario} teve um Desempenho Satisfatório`)
        } else {
            console.log(`${funcionario} teve um Desempenho Insatisfatório`)
        }
    }

}

const vendasPorFuncionario = {
    "João": 15000,
    "Maria": 20000,
    "Carlos": 12000,
    "Ana": 18000
}

desempenhoIndividual(vendasPorFuncionario)