const usuario = {
    nome: 'Daniel',
    idade: 29,
    time: 'Fluminense'
}
const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!'
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Rubro-Negro!'
const mensagemDeBoasVindas3 = 'Bem vindo, torcedor Vascaíno!'
const mensageDeBoasVindasGeral = 'Bem vindo, amante do esporte!'
const mensagemDeEscolha = 'Clique no setor para o qual deseja comprar seu ingresso!'
const mensagemFinal = 'Divirta-se no Maracanã!!!'

let numeroDeRepeticoes = 0

do {
    const mensagemDeBoasVindas = 
    usuario.time === 'Fluminense' && usuario.idade >= 18
    ? mensagemDeBoasVindas1
    : usuario.time === 'Flamengo' && usuario.idade >= 18
    ? mensagemDeBoasVindas2 
    : usuario.idade >= 18 
    ? mensageDeBoasVindasGeral 
    : console.log('Não vendemos ingresso para torcedores menores de 18 anos')

    // Você pode fazer mais de uma avaliação para o operador ternário
    // Quanto estiver fazendo com operador ternário, faça até duas expressões, se não utilize outras estruturas
    // Prestar atenção quando for utilizar, pois é complicado de ler e confunde

    console.log(mensagemDeBoasVindas)

    console.log(mensagemDeEscolha)
    console.log(mensagemFinal)

    numeroDeRepeticoes++
} while (numeroDeRepeticoes < 5)

console.log('Ingressos Esgotados')
