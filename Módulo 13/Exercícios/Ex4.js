const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Olá");
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(", Mundo!");
  }, 2000);
});

promise1.then((result) => {
  promise2.then((result2) => {
    console.log(result + result2);
  });
});
