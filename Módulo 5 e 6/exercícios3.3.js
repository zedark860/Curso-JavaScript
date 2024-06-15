const pedidoCliente = {
    "Hambúrguer simples" : 15.00,
    "Hambúrguer com queijo" : 20.00,
    "Batata frita" : 10.00,
    "Refrigerante pequeno" : 7.00,
    "Refrigerante grande" : 9.00,
    "Milkshake" : 8.00
}

const calcularTotalConta = (pedidoCliente) => {
    let total = 0
    for (item in pedidoCliente) {
        total += pedidoCliente[item]
    }
    return console.log(`O total do pedido do cliente é: R$${total.toFixed(2)}`)
}

calcularTotalConta(pedidoCliente)