const times = [
  "Flamengo",
  "Fluminense",
  "Vasco",
  "Botafogo",
  "Corinthians",
  "Santos",
  "Internacional",
  "Grêmio",
  "São Paulo",
  "Palmeiras",
  "Cruzeiro",
  "Grêmio",
  "Atlético MG",
];

function descobrirCampeaoBrasileiro() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numeroAleatorioEntre0e1 = Math.random();

      if (numeroAleatorioEntre0e1 > 0.2) {
        resolve(Math.floor(times.length * Math.random()));
      }

      reject(new Error("erro buscando o time campeão"));
    }, 1500);
  });
}

async function obterDadosComFallback() {
  try {
    const indice = await descobrirCampeaoBrasileiro();
    console.log(
      `O time campeão do Campeonato Brasileiro de 2023 será o ${times[indice]}`
    );
  } catch (error) {
    console.log(error.message);
  }
}

obterDadosComFallback();
