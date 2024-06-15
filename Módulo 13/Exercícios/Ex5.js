const promise = new Promise((resolve, reject) => {
  const horaInicio = Date.now();
  setTimeout(() => {
    const horaFim = Date.now();
    const diferencaTempo = horaFim - horaInicio;

    diferencaTempo >= 1000
      ? reject("Falha ao cumprir a promise")
      : resolve("Sucesso ao compurir a promise");
  }, 500);
});

promise.then(console.log).catch(console.error);
