function gerenciamentoEstoque(estoque) {
    const totalItensEstoque = Object.keys(estoque).length
    let i = 0
    let itensFalta = []

    console.log('Esses são os itens do estoque: ', estoque)

    do {
        let produto = Object.keys(estoque)[i]
        if (estoque[produto] < 35) {
            itensFalta.push(produto)
            console.log(`O item ${produto}, está abaixo do estoque e foi adicionado a lista de abaixo do estoque`)
        }

        i++
    } while (i < totalItensEstoque)

    console.log('Esses são os itens que estão com falta no estoque: ', itensFalta)
}

const estoque = {
    "Hambúrguer simples": 50,
    "Hambúrguer com queijo": 30,
    "Batata frita": 40,
    "Refrigerante pequeno": 60,
    "Refrigerante grande": 45,
    "Milkshake": 20,
    "Salada": 15
}

gerenciamentoEstoque(estoque)