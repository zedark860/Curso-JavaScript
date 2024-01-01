function tratarErroFuncaoInexistente() {
    try {
        FuncaoInexistente()
        console.log('A função foi chamada')
    } catch (error) {
        console.error('Erro ao tentar chamar a função, ela não está definida', error)
    }
}

tratarErroFuncaoInexistente()