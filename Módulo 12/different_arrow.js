// Precisa criar a arrow function ou a função anônima e depois chamar ela
// Dentro de uma variável se aplica essa regra
const myLoggingFunction = (message) => {
  console.log(message);
  console.log('Segunda instrução da minha arrow function');
};

const myNormalLoggingFunction = function (message) {
  console.log(message);
};

//myLoggingFunction("Teste da primeira arrow function do arquivo");

//myNormalLoggingFunction(
//  "Teste da minha função normal armazenada em uma variável"
//);

// Caso a arrow function peça um parâmetro apenas, caso não tenha nenhum mantém os parênteses
//const myLoggingFunctionWithOnlyParameter = message => {
//  console.log(message);
//};

// Caso só tenha uma instrução a arrow function, não precisa de parênteses
const myLoggingFunctionWithOnlyParameter = (message, message2) => console.log(message + message2);

myLoggingFunctionWithOnlyParameter('Teste da função: ', 'bora ver se deu certo');