async function buscarMultiplosDados() {
  const result = await Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("dados1");
      }, 1000);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("dados2");
      }, 1500);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("dados3");
      }, 2000);
    }),
  ]);

  console.log(result);
}

buscarMultiplosDados();
