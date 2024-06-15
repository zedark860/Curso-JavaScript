const primeiraVariavelDoCodigo = 'texto inicial'

// o node procura a variável definida dentro da função primeiro e depois no espaço global
// caso já esteja definida na função usa na função, se não usa a global
// se tiver uma função dentro da outra ele busca na função de cima, se não existir ele procura no espaço global

function printToConsole() {
  const primeiraVariavelDoCodigo = 'segundo texto'

  function secondFunction() {
    const primeiraVariavelDoCodigo = 'terceiro texto'
    console.log(primeiraVariavelDoCodigo);
  }

  console.log(primeiraVariavelDoCodigo)

  secondFunction()
}

printToConsole()
