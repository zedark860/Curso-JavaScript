Promise.all([
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Um");
    }, 1000);
  }),

  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dois");
    }, 1000);
  }),

  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Tres");
    }, 1000);
  }),
]).then((result) => {
  console.log(result);
});
