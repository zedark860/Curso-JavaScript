function calcularQuadrado(numeroDaVez) {
  console.log(`O número da vez é o ${numeroDaVez}`);
  console.log(
    `O número da vez (${numeroDaVez}) ao quadrado vale ${numeroDaVez ** 2}`
  );
}

for (let i = 0; i <= 15; i++) {
  calcularQuadrado(i)
}

let i2 = 0

while (i2 <=  15) {
  calcularQuadrado(i2)
  i2++
}