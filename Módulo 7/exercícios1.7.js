// Simulando conexão com BD

function conectarBancoDeDados() {
    console.log('Estabelecendo conexão com Banco de dados')
    try {
        console.log('Conexão com banco de dados bem sucedida')
    } catch (error) {
        console.error('Conexão com banco de dado mal sucedida', error)
    } finally {
        console.log('Conexão finalizada')
    }
}

conectarBancoDeDados()

// Fazendo com banco ficticio

let banco = {
    registro1: {id: 1, nome: 'Item1'},
    registro2: {id: 2, nome: 'Item2'},
    registro3: {id: 3, nome: 'Item3'}
}

function conectarBancoDeDadosFake() {
    try {
        const resultado = banco.registro4 // Não irá encontrar o registro
        if (!resultado) {
            throw new Error('registro não encontrado')
        }
        console.log('Registro encontrado:', resultado)
    } catch (error) {
        console.error(error.message)
    }
}

conectarBancoDeDadosFake()