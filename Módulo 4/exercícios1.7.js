function verificarPlaca(ultimoNum) {
    if (isNaN(ultimoNum)) {
        return 'O último caractere da placa não é número!'
    }

    switch (parseInt(ultimoNum)) {
        case 1:
        case 2:
            return 'O dia de rodízio em SP será Segunda'
        case 3:
        case 4:
            return 'O dia de rodízio em SP será Terça'
        case 5:
        case 6:
            return 'O dia de rodízio em SP será Quarta'
        case 7:
        case 8:
            return 'O dia de rodízio em SP será Quinta'
        case 9:
        case 0:
            return 'O dia de rodízio em SP será Sexta'
        default:
            return 'O último número da sua placa não simboliza nenhum dia da semana!'    
    }
}

const numeroPlaca = 'A8B9C2'

const ultimoNum = numeroPlaca.slice(-1)

console.log(verificarPlaca(ultimoNum))