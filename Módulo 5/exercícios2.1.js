function listarCardapioDigital(cardapio) {
    for (itens in cardapio) {
        console.log(`Esses é um dos itens cardápio: ${itens} : R$${cardapio[itens]}\n`)
    }
}

let cardapio = {
    "Hambúrguer simples": 10.00,
    "Hambúrguer com queijo": 12.00,
    "Batata frita": 6.00,
    "Refrigerante pequeno": 4.00,
    "Refrigerante grande": 6.00,
    "Milkshake": 8.00,
    "Salada": 7.00
}

listarCardapioDigital(cardapio)