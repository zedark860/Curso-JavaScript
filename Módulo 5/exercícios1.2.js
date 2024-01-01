function categoriaCliente(pontuacaoFidelidade) {
    if (pontuacaoFidelidade >= 85) {
        return console.log('Cliente Premium')
    } else if (pontuacaoFidelidade >= 50) {
        return console.log('Cliente Regular')
    } else {
        return console.log('Cliente Comum')
    }
}

const pontuacaoFidelidade = 50

categoriaCliente(pontuacaoFidelidade)