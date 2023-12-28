const cardapioLanchonete = [
    "Hambúrguer simples",
    "Hambúrguer com queijo",
    "Batata frita",
    "Refrigerante pequeno",
    "Refrigerante grande",
    "Milkshake"
]

const listarItensCardapio = (cardapioLanchonete) => {
    for (item of cardapioLanchonete) {
        console.log(`Item: ${item}`)
    }
}

listarItensCardapio(cardapioLanchonete)