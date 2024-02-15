// Função padrão
function writeThisMessageOnConsole(message) {
  console.log(message);
}

// Chama da função
writeThisMessageOnConsole("Escreva esse argumento no console");

// Função anônima
const writeUserMessageVariableVersion = function (message) {
  console.log(message);
};

writeUserMessageVariableVersion(
  "Escreva esse argumento no console - Versão variável"
);

// Arrow Function
const writeUserMessageArrowVersion = (message) => {
  console.log(message);
};

writeUserMessageArrowVersion(
  "Escreva esse argumento no console - Versão flecha ~ (arrow function)"
);

// Função anônima versão arrow function
() => {
  console.log("essa é uma função!");
};
