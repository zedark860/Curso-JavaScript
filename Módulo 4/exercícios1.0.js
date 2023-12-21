function verificarDesconto(preco) {
    if (preco >= 100) {
        const desconto = preco * 0.1
        const descontoAplicado = preco - desconto
        return `O desconto de 10% foi aplicado a sua compra, o valor final é ${descontoAplicado}`
    }
    return 'Nenhum desconto aplicado, pois a compra não é maior ou igual a R$ 100'
}

const valorCompraCliente = 90
const resultado = verificarDesconto(valorCompraCliente)

console.log(resultado)