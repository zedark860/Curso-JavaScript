function tratarErroPropriedadeInexistente() {
    try {
        const objeto = {}
        console.log(objeto.propriedade.valor)
    } catch (error) {
        console.error('A propriedade dentro do objeto não existe', error)
    }
}

tratarErroPropriedadeInexistente()