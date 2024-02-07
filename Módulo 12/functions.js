// writeThisMessageOnConsole('Escrevi a mensagem com sucesso!');

setTimeout(function (){
    writeThisMessageOnConsole('Escreva essa minha mensagem aqui!'); // chamando uma função dentro de uma função anônima
    // resultFunction(); chamando uma função em uma variável dentro de uma função anônima
}, 2000); // Função anônima, só pode ser utiliza em um lugar e não pode ser chamada em outro lugar

function writeThisMessageOnConsole(message) {
    console.log(message);

}

const resultFunction = function (){
    writeThisMessageOnConsole('Escreva essa minha mensagem aqui!'); // chamando uma função dentro de uma função anônima
}

// const result = writeThisMessageOnConsole('parametro');
// console.log(result);

// writeThisMessageOnConsole();

resultFunction();