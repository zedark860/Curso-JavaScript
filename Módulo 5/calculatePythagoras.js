function calculateSquareRoot(radicand) {
    console.log('O valor do meu radiacando é: ', radicand)
    return radicand ** 0.5 //ou (1 / 2)
}

function calculatePythagoras(side1, side2) {
    console.log(`Os tamanhos dos catetos do meu triângulo são:`,side1, side2)
    const sum = side1 ** 2 + side2 ** 2
    console.log(`O valor da variável sum é:`,sum)
    return calculateSquareRoot(sum)
}

console.log(`O tamanho da hipotenusa de um triângulo retângulo de lados 3 e 4 é ${calculatePythagoras(3, 4)}`)