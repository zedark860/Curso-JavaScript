const estoqueLachonete = {
    hamburguer : 20,
    batataFrita: 15,
    refrigerante: 30,
    milkshake: 10,
}

function atualizarEstoque(estoque, itemFalta, quantidadeAdicionar) {
    if (estoque.hasOwnProperty(itemFalta)) {
        estoque[itemFalta]  += quantidadeAdicionar
        console.log(`Estoque foi atualizado: ${itemFalta} : ${estoque[itemFalta]}`)
    } else {
        console.log('Item não foi encontrado no estoque')
    }
}

console.log('Estoque da Lanchonete:\n', estoqueLachonete)

let continuarAdicionando = true
let itemNaoEncontrado = false

do {
    const itemFalta = 'hamburgue'
    const quantidadeAdicionar = 5

    if (!estoqueLachonete.hasOwnProperty(itemFalta)) {
        //if (!itemNaoEncontrado) { Essa linha não faz sentido, pois o if acima já chega se o item não existe e além disso
        //se não fosse colocado para continuarAdicionando como false nessa condição o programa iria continuar no loop para sempre
        console.log(`O item não foi encontrado ${itemNaoEncontrado}`)
        // itemNaoEncontrado = true
        continuarAdicionando = false
        //}
    } else if (estoqueLachonete[itemFalta] + quantidadeAdicionar > 50) {
        continuarAdicionando = false
        console.log(`Limite do estoque ${itemFalta}: ${estoqueLachonete[itemFalta]} foi atingido`)
    } else {
        atualizarEstoque(estoqueLachonete, itemFalta, quantidadeAdicionar)
    }

} while(continuarAdicionando)

console.log('Estoque final', estoqueLachonete)
