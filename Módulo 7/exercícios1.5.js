function tratarErroDivisaoPorZero() {
    try {
        const dividendo = 1 
        const divisor = 2
    
        if (divisor === 0) {
            throw new Error('A divisão não pode ser feita por 0')
        }

        console.log('O número foi divido com sucesso, esse é seu resultado', dividendo / divisor)
    } catch (error) {
        console.error(error.message)
    }
}

tratarErroDivisaoPorZero()