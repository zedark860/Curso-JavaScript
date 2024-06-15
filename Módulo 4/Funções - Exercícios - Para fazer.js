console.log('Resolução do exercício 1')

function calcularMedia(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3
    if (media > 6) {
        console.log(`Você está aprovado com a nota ${media}`)
    }
    else {
        console.log(`Você está reprovado com a nota ${media}`)
    }
    return media
}

const notaProva1 = 8
const notaProva2 = 6.5
const notaProva3 = 5

const mediaAnterior = calcularMedia(notaProva1, notaProva2, notaProva3)

console.log('Resolução exercício 2')

function novaMedia(mediaAntiga, notaPfFinal) {
    const mediaFinal = (mediaAntiga + notaPfFinal) / 2
    if (mediaFinal > 6) {
        console.log(`Você está aprovado com a nota ${mediaFinal} e essa é sua média final`)
    }
    else {
        console.log(`Você está reprovado com a nota ${mediaFinal} e essa é sua média final`)
    }
}

const provaFinal = 6

novaMedia(mediaAnterior, provaFinal)

console.log('Resolução exercício 3')

function converterParaFarenheit(temperaturaGrausCelsius) {
    const temperaturaEmFarenheit = (9/5)*(temperaturaGrausCelsius) + 32
    return temperaturaEmFarenheit
}

const temperaturaGrausCelsius = 32.5

console.log('A temperatura em Farenheit é: ' + converterParaFarenheit(temperaturaGrausCelsius))

console.log('Resolução Exercício 4')

function calcularImposto(precoProduto) {
    const valorImposto = precoProduto * 1.08875
    return valorImposto
}

const precoProduto = 25.50

console.log(`O valor a ser pago é ${calcularImposto(precoProduto).toFixed(2)}.`)