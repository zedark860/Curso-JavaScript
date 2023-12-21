function coresDoSemaforo(cor) {
    switch (cor) {
        case 'vermelho':
            return 'Necessário parar'
        case 'amarelo':
            return 'Atenção, Necessário parar'
        default:
            return 'É seguro passar'
    }
}

const cor = 'vermelho'

console.log(coresDoSemaforo(cor))