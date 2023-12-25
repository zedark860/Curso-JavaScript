const cardapioLanchonete = [    
    "Hambúrguer simples",
    "Hambúrguer com queijo",
    "Batata frita",
    "Refrigerante pequeno",
    "Refrigerante grande",
    "Salada",
    "Salada"
]

function contarItensDoCardapio(cardapio, itensContados = []) {
    if (cardapio.length === 0) {
        return 0;
    } else {
        const itemAtual = cardapio[0];
        
        if (!itensContados.includes(itemAtual)) {

            itensContados.push(itemAtual);

            return 1 + contarItensDoCardapio(cardapio.slice(1), itensContados);
        } else {

            return contarItensDoCardapio(cardapio.slice(1), itensContados);
        }
    }
}

const quantidadeItens = contarItensDoCardapio(cardapioLanchonete);
console.log(`Itens diferentes no cardápio: ${quantidadeItens}`);
