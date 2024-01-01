function tratarErroAcessarPropriedadeNull() {
    try {
        const objeto = null
        console.log(objeto.propriedade)
    } catch (error) {
        console.error('A propriedade dentro do objeto não existe', error)
    }

}

tratarErroAcessarPropriedadeNull()