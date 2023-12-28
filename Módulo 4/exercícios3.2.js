const cardapioLanchonete = {
    "Hambúrguer simples" : 15.00,
    "Hambúrguer com queijo" : 20.00,
    "Batata frita" : 10.00,
    "Refrigerante pequeno" : 7.00,
    "Refrigerante grande" : 9.00,
    "Milkshake" : 8.00
}

const listarItensCardapio = (cardapio) => {
    for (itemCardapio in cardapio) {
        console.log(`Item: ${itemCardapio} - Preço: R$${cardapio[itemCardapio].toFixed(2)}`)
    }
}

listarItensCardapio(cardapioLanchonete)