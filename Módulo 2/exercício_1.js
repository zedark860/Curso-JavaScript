function soma(valor1, valor2) {
    const resultado = valor1 + valor2
    console.log(`O valor da soma das minhas duas variáveis é ${resultado}`)
    return resultado
}

function aoQuadrado(valor) {
    return valor**2
}

const valor1 = 2148
let valor2 = ''

console.log(`O valor da minha primeira variável é ${valor1}`)

valor2 = 25

console.log(`O valor da minha segunda variável é ${valor2}`)

soma(valor1, valor2)

const resultadoQuadrado = aoQuadrado(valor2)

console.log(`A variável 2 elevada ao quadrado é ${resultadoQuadrado} e divida por 3 fica: ${resultadoQuadrado / 3}`)