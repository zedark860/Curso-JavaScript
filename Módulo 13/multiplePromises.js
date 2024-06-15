const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Código do primeiro Aluno");
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Código do segundo aluno");
    }, 2300);
});

Promise.race([promise1, promise2])
    .then(console.log)

async function generateTotalPrice() {
  const startTime = Date.now();

  Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1500);
      }, 2000);
    }),

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(3500);
      }, 2000);
    }),
  ])
    .then((array) => {
      console.log(array[0] + array[1]);
    })
    .then(() => {
      const endTime = Date.now();

      console.log(`ElapsedTime ${endTime - startTime}ms`);
    });
}

