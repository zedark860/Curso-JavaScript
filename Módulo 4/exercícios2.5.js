function gerarNumeroAleatorio() {
    let count = 1
    const numSorteado = 5
    let numAleatorio
    do {
        numAleatorio = Math.floor(Math.random() * 10)
        console.log(`O número aleatório da vez é ${numAleatorio}, a tentativa é a ${count}\n`)

        if (numAleatorio === numSorteado) {
            console.log('Parabéns você ganhou! O total de tentativas foi: ', count)
            return
        } else {
            console.log('Que pena você não ganhou, mas tente novamente\n')
        }

        count++
    } while(numAleatorio !== numSorteado)

}

gerarNumeroAleatorio()