function tratarErroConversaoTipo() {
    try {
        const numero = 'Hashtag'
        const resultado = parseInt(numero)

        if (isNaN(resultado)) {
            throw new Error('Não foi possível converter uma string em um número')
        }
        console.log('Número convertido com sucesso', resultado)
    } catch (error) {
        console.error(error.message) // pega a mensagem do throw e mostra 
    }
}

tratarErroConversaoTipo()