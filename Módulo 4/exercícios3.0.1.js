const cardapioLanchonete = [    
    "Hambúrguer simples",
    "Hambúrguer com queijo",
    "Batata frita",
    "Refrigerante pequeno",
    "Refrigerante grande",
    "Salada",
    "Salada",
    "Milkshake"
]

function contarItensDoCardapio(cardapio) {
    if (cardapio.length === 0) {
        return 0
    } else {
        cardapio.pop()
        return 1 + contarItensDoCardapio(cardapio)
    }
}

const totalItens = contarItensDoCardapio(cardapioLanchonete)

console.log(`Total de itens no cardápio: ${totalItens}`)

const cardapioLanchonete2 = [    
    "Hambúrguer simples",
    "Hambúrguer com queijo",
    "Batata frita",
    "Refrigerante pequeno",
    "Refrigerante grande",
    "Salada",
    "Salada",
    "Milkshake"
]

// Outra forma de fazer, porém retirando itens diferentes

function contarItensDoCardapio2(cardapio) {
    const itensUnicos = new Set(cardapio)

    if (itensUnicos.size === 0) {
        return 0
    } else {
        return itensUnicos.size
    }
}

const totalItens2 = contarItensDoCardapio2(cardapioLanchonete2)

console.log(`O total de itens diferentes no cardápio é: ${totalItens2}`)