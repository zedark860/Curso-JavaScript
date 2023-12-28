// Você é o caixa de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres ao longo de
// um mês. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia do
// mês. Crie uma função recursiva em JavaScript que calcule o valor total das vendas de hambúrgueres no mês.

const vendasDoMes = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150]

const valorHamburguer = 10

function contarVendasDoMes(vendasDoMes, valorHamburguer) {
    if (vendasDoMes.length === 0) {
        return 0
    } else {
        const venda = vendasDoMes.shift()
        return valorHamburguer * venda + contarVendasDoMes(vendasDoMes,valorHamburguer)
    }
}

const totalVendasMes = contarVendasDoMes(vendasDoMes,valorHamburguer)

const formatoMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency : 'BRL'
})

console.log(`Total vendas no mês é de: R$${formatoMoeda.format(totalVendasMes)}`)