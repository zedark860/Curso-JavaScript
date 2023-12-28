const cardapio = {
    Hamburguer: 10,
    BatataFrita: 5,
    Refrigerante: 2,
    Milkshake: 7
}

pedidoCliente = [
    {nome : 'Hamburguer', quantidade : 2},
    {nome : 'BatataFrita', quantidade : 1},
    {nome : 'Refrigerante', quantidade : 3}
]

function calcularTotalConta(cardapio, pedidoCliente) {
    let total = 0
    for (item of pedidoCliente) {
        const nome = item.nome // poderia colocar direto embaixo
        const quantidade = item.quantidade // poderia colocar direto embaixo
        if (nome in cardapio) { // poderia ser item.nome
            total += cardapio[nome] * quantidade // quantidade poderia ser item.quantidade e nome poderia ser item.nome
        }
    }
    return total
}

console.log(`O total do pedido do cliente é R$${calcularTotalConta(cardapio, pedidoCliente)}`)