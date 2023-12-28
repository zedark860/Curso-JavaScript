
const vendasDoMes = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150]

const precoPorHamburguer = 10

function calcularValorTotalVendas (vendaDiarias, precoPorHamburguer, dia) {
    // Caso base - ponto de parada =>
    if (dia >= vendaDiarias.length) {
        return 0
    } 

    // Caso recursivo
    const valorVendaDiaAtual = vendaDiarias[dia] * precoPorHamburguer
    const valorDaProximoDia = calcularValorTotalVendas(vendaDiarias, precoPorHamburguer, dia + 1)

    return valorVendaDiaAtual + valorDaProximoDia
}

console.log(calcularValorTotalVendas(vendasDoMes, precoPorHamburguer, 0))