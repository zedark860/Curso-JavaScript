const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promisse resolvida");
    }, 1000);
});

promise
    .then((result) => {
        console.log(result)    
    }).catch((err) => {
        console.error(err)
    });