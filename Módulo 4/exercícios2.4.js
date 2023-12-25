function entregaDePedidos(pedidos) {
    let quantidadePedidos = pedidos.length
    let i = 0
    
    while (i < quantidadePedidos) {
        console.log(`O pedido ${pedidos[i]}, está pendente e logo será entregue.`)
        
        console.log(`O pedido ${pedidos[i]}, foi entregue!\n`)

        console.log(`O pedido ${pedidos[i]} não está mais pendente.\n`)
        i++
    }

    console.log('Todos os pedidos da lista já foram entregues')

}

let pedidos = [    
    "Hambúrguer simples",
    "Hambúrguer com queijo",
    "Batata frita",
    "Refrigerante pequeno",
    "Refrigerante grande",
    "Milkshake",
    "Salada"
]

entregaDePedidos(pedidos)