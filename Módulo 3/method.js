let casa = {
    cor: '#fff',
    sala: 15,
    cozinha: 10,
    banheiro: 8,
    quarto: 20,
    calcularTamnhoTotalCasaEmM2: function () {
        const tamanhoTotal = this['sala'] + this['cozinha'] + this['banheiro'] + this['quarto']
        console.log(`O tamanho da casa é de ${tamanhoTotal}m2`)
        return tamanhoTotal
    }
}

casa.calcularTamnhoTotalCasaEmM2()

casa = {
    cor: '#fff',
    sala: 15,
    cozinha: 10,
    banheiro: 8,
    quarto: 20,
    calcularTamnhoTotalCasaEmM2: function () {
        let propriedades = Object.values(casa)
        let tamanhoTotal = 0
        
        for (let propriedade of propriedades) {
            if (typeof propriedade === 'number')
                tamanhoTotal += propriedade
        }
        
        console.log(`O tamanho da casa é de ${tamanhoTotal}m2`)
        return tamanhoTotal
    }
}

casa.calcularTamnhoTotalCasaEmM2()