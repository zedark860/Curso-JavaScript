
function tratarErroVariavelNaoDefinida() {
    try {
        console.log(variavelNaoDefinida)
    } catch(error) {
        console.error(`A variável não foi definida`, error)
    }
}

tratarErroVariavelNaoDefinida()