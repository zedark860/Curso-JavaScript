const cardapio = {
    Hamburguer: 10,
    BatataFrita: 5,
    Refrigerante: 2,
    Milkshake: 7
}

const pedidoCliente = {
    Hamburguer: 2,
    BatataFrita: 1,
    Refrigerante: 3
}

function calcularTotalConta(cardapio, pedidoCliente) {
    let total = 0
    for (item in pedidoCliente) {
        if (item in cardapio) {
            total += cardapio[item] * pedidoCliente[item]
        }
    }
    return total
}

console.log(`O total da conta do cliente é R$${calcularTotalConta(cardapio, pedidoCliente)}`)