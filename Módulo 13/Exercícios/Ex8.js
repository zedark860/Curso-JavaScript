function pegarDadosApi() {
  return new Promise((resolve, reject) => {
    const numeroAleatorio = Math.random(); // 0 e 1
    setTimeout(() => {
      if (numeroAleatorio > 0.5) {
        resolve({
          color: "#51f",
          shape: "rectangule",
        });
      }

      reject(new Error("Error obtaining data"));
    }, 1000);
  });
}

async function buscarDados() {
  try {
    const resposta = await pegarDadosApi();
    console.log(resposta);
  } catch (error) {
    console.error(error.message);
  }
}

buscarDados();
