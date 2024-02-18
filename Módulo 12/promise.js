const fluminenseCampeaoLibertadores2023 = false;

const promessa = new Promise((resolve, reject) => {
  console.log("Prometo que vou te pagar!");
  setTimeout(() => {
    if (fluminenseCampeaoLibertadores2023) {
      resolve("Toma aqui seu pagamento! Exatamente como combinamos!");
    } else {
      reject(
        "Não acredito que ele perdeu! Infelizmente não vou conseguir te pagar!"
      );
    }
  }, 2000);
});

console.log(promessa);

// Quando a promisse for concluída e junto se caso for rejeitada
promessa
  .then((response) => {
    console.log(response);
    console.log("Poo, nem acredito que você me pagou!");
  })
  .catch((error) => console.error(error));

// ou

// promessa.then(console.log).catch(console.log);
