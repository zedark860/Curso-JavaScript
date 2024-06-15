function and(variavel1, variavel2) {
    const resultado = variavel1 && variavel2
    return resultado
}

function or(variavel1, variavel2) {
    const resultado = variavel1 || variavel2
    return resultado
}

function orAnd(variavel1, variavel2, variavel3) {
    const resultado = (variavel1 && variavel2) && variavel3
    const resultado1 = (variavel1 || variavel2) || variavel3
    return [resultado, resultado1]
}

const variavel1 = true
const variavel2 = false

console.log(and(variavel1, variavel2))
console.log(or(variavel1, variavel2))

const variavel3 = true

const [resultadoAnd, resultadoOr] = orAnd(variavel1, variavel2, variavel3)

console.log(`O resulado das 3 variáveis com And e Or é ${resultadoAnd} e ${resultadoOr}`)