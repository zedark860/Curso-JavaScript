const fs = require('fs')
const nomeArquivo = 'arquivo.txt'

function lerArquivo(nomeArquivo, fs) {
    try {
        fs.readFile(nomeArquivo, 'utf-8', (err, data) => {
            if (err) {
                throw err
            }

            if (data.trim() === '') {
                console.error('O arquivo está vazio')
                return
            }

            console.log('Conteúdo do arquivo:', data)
        })
    } catch (error) {
        console.error(error.message)
    }
}

lerArquivo(nomeArquivo, fs)

// outro jeito mais simples de fazer e sem tantos tratamentos

function lerArquivoComFs() {
    try {
        const conteudoDoArquivo = fs.readFileSync('arquivo.txt', 'utf-8')
        console.log(conteudoDoArquivo)
    } catch (error) {
        console.error('Erro ao ler arquivo', error.message)
    } finally {
        console.log('Programa encerrado')
    }
}

lerArquivoComFs()