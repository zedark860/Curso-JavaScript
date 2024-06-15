const pedidoCliente = [
    15.00,
    20.00,
    10.00,
    7.00,
    9.00,
    8.00
]

const calcularTotalConta = (pedidoCliente) => {
    let total = 0 
    for (item of pedidoCliente) {
        total += item
    }
    return console.log(`O total da conta do cliente deu R$${total.toFixed(2)}`)
}

calcularTotalConta(pedidoCliente)