// function writeMessageOnConsoleAndReturnTwo(message) {
//    console.log(message);
//   return 2;
//}

// palavra-chave function X
// nome da função X
// parênteses - parâmetros V
// bloco de chaves com instruções dentro X
// instrução de retorno V

const variableThatStoresFunction = function (message) {
  console.log(message);
  // quando você não da instrução de retorno ela retorna undefined
};

const variableThatStoresFunction2 = function (message) {
  console.log(message);
  return undefined;
};

console.log(variableThatStoresFunction("teste"));
console.log(variableThatStoresFunction2("Teste"));

const writeMessageOnConsoleAndReturnTwo = (message) => {
  console.log(message);
};

function squareNumber(originalNumber) {
  return originalNumber * originalNumber;
}

const squareNumberArrow = (originalNumber) => originalNumber * originalNumber;

const arrowFunctionRetunObject = () => {
  // não da pra retornar objeto sem chaves, pois ela acha que as chaves são dela
  return {
    id: 0,
    nome: "Davi",
  };
};

// console.log(squareNumber(3));
// console.log(squareNumberArrow(3));

console.log(arrowFunctionRetunObject());
