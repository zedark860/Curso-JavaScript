const investimentoMensal = [1000, 2000, 3000, 2000, 1500, 1200, 1300]
let meses = ['jan', 'fevereiro', 'maio', 'março', 'abril', 'jun', 'jul']

console.log(investimentoMensal)

let i = 1

for (valor of investimentoMensal) {
    console.log(meses[-1+i],valor)
    i++
}

meses.push('agosto')
console.log(meses)