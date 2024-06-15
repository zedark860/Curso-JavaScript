//setTimeout(() => {
//    writeThisMessageOnConsole("Escreva essa minha mensagem aqui!");
//}, 2000);

function writeThisMessageOnConsole(message) {
    console.log(message);
}

const resultFunction = () => {
    writeThisMessageOnConsole("Escreva essa minha mensagem aqui!");
};

console.log(resultFunction());