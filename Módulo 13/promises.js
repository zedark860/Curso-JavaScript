const fluminenseCampeao2023 = false;

const promessa = new Promise((resolve, reject) => {
  console.log("Prometo que vou te pagar!");
  setTimeout(() => {
    if (fluminenseCampeao2023) {
      resolve("Toma aqui seu pagamento! Como combinamos!");
    } else {
      reject("Não acredito na derrota! Infelizmente não conseguirei te pagar!");
    }
  }, 2000);
});

promessa
  .then((response) => {
    console.log(response);
    console.log("Nem acredito que você me pagou!");
  })
  .catch((error) => {
    console.error(error);
  });
