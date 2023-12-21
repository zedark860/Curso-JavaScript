function verificarEstoque(produtoEscolhido) {
    if (produtoEscolhido > 0) {
        return console.log('Produto Disponível')
    } else {
        return console.log('Produto Esgotado')
    }
}

const produtos = {
    pera : 100,
    maça : 50,
    banana : 0,
    manga : 25
}

const produtoEscolhido = produtos.banana

verificarEstoque(produtoEscolhido)