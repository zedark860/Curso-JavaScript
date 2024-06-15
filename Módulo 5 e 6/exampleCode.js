const usuario = {
    nome: 'Daniel',
    idade: 29,
    time: 'Naútico'
}

const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!'
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Rubro-Negro!'
const mensagemDeBoasVindas3 = 'Bem vindo, torcerdor Vascaíno!'
const mensagemDeBoasVindas4 = 'Bem vindo, torcerdor Santista!'
const mensagemDeBoasVindas5 = 'Bem vindo, torcerdor do Náutico!'
const mensagemDeBoasVindas6 = 'Bem vindo, torcerdor do Atlético Mineiro!'
const mensagemDeBoasVindas7 = 'Bem vindo, torcerdor do Cruzeiro!'
const mensagemDeBoasVindas8 = 'Bem vindo, amante do esporte!'


//if (usuario.time === 'Fluminense') {
//    console.log(mensagemDeBoasVindas1)
//}
//else if (usuario.time === 'Flamengo') {
//    console.log(mensagemDeBoasVindas2)
//}
//else {
//    console.log(mensagemDeBoasVindas3)
//}

//ou

switch (usuario.time) {
    case 'Fluminense':
    case 'São Paulo':
    case 'Grêmio':
        // Você pode colocar outros case para fazer a mesma coisa na linha de execução
        console.log(mensagemDeBoasVindas1)
        break
    case 'Flamengo':
        console.log(mensagemDeBoasVindas2)
        break
    case 'Vasco':
        console.log(mensagemDeBoasVindas3)
        break
    case 'Santos':
        console.log(mensagemDeBoasVindas4)
        break
    case 'Naútico':
        console.log(mensagemDeBoasVindas5)
        break
    case 'AtléticoMG':
        console.log(mensagemDeBoasVindas6)
        break
    case 'Cruzeiro':
        console.log(mensagemDeBoasVindas7)
        break
    default:
        console.log(mensagemDeBoasVindas8)
}

//ou

// Isso é um operador ternário, muito útil para avaliar uma coisa, se é verdadeiro ou falso
//const mensagemDeBoasVindas = usuario.time === 'Fluminense' ? mensagemDeBoasVindas1 : mensagemDeBoasVindas2

//console.log(mensagemDeBoasVindas)

const mensagemDeEscolha = 'Clique no setor para o qual deseja comprar seu ingresso!'
const mensagemFinal = 'Divirta-se no Maracanã!!!'

console.log(mensagemDeEscolha)
console.log(mensagemFinal)