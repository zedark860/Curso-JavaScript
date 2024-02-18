function procedimento1(outrafuncao) {

    outrafuncao();
}

function procedimento2() {
    console.log('A função 2 foi executada com sucesso')
}

// Está passando o retorno da função e não a função
// procedimento1(undefined) = procedimento1(procedimento2())

// procedimento1(procedimento2)

// Ou chamar a função pelo nome ou passar com uma função anônima
procedimento1(() => {
    console.log('A função 2 foi executada com sucesso')
})

// Voce passar uma função ela vai como um objeto com suas caractéristicas para serem executadas
// Se você passar a função sendo executada ela vai devolver o retorno dela, caso não tenha retorno ela só da undefined