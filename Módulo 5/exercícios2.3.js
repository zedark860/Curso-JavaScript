function contagemDinheiroCaixa(vendas) {
    let i = 0
    let total = 0
    const quantidadeItensVendas = vendas.length

    while (i < quantidadeItensVendas) {
        total += vendas[i]
        console.log(`A quantidade de vendas recebidas até agora é R$${total}\n`)
        i++
    }
    
    console.log('O caixa agora está fechado, pois a contagem de todas as vendas foram feitas!')
}

let valoresDeVendas = [15.00, 22.00, 18.00, 12.00, 25.00, 20.00, 17.00, 19.00, 21.00, 16.00];

contagemDinheiroCaixa(valoresDeVendas)
