console.log('Resultado exercício 1')

const lista = [1,2,3,4,5]

console.log(lista)

console.log(`O valor do elemnto 1 da minha lista é ${lista[0]}`)


console.log('Resultado exercício 2')

const pokemon = {
    nome : 'Blastoise',
    estamina : 100,
    defesa : 70,
    ataque : 70,
    habilidade : 'protect'
}

for (const chave in pokemon) {
    console.log(`Meu objeto pokemon possui ${chave} que é ${pokemon[chave]}`)
}

console.log('Resultado exercício 3')

const valor1 = 25
const valor2 = 4

const soma = valor1 + valor2
console.log(`Soma: ${soma}`)

const diminuicao = valor1 - valor2
console.log(`Diminuição: ${diminuicao}`)

const divisao = valor1 / valor2
console.log(`Divisão: ${divisao}`)

const multiplicacao = valor1 * valor2
console.log(`Multiplicação: ${multiplicacao}`)

valor1 = 4
valor2 = 25
console.log(valor1 > valor2)
console.log(valor2 > valor1)

valor1 = 88
valor2 = 30
console.log(valor1 < valor2)
console.log(valor2 < valor1)

valor1 = '1234'
valor2 = 1234
console.log(valor1 === valor2) // opte por esse
console.log(valor1 == valor2) // utilizar em algumas situações