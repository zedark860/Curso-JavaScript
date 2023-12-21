function mesagemSemaforo(cor) {
    return cor === 'vermelho' ? 'Pare' : cor === 'amarelo' ? 'Atenção' : 'Andar'
}

const cor = 'verde'

console.log(mesagemSemaforo(cor))