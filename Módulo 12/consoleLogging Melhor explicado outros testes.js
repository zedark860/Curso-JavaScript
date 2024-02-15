console.log(1);

// setTimeout aguarda 2 segundos antes de executar a função de seta
const result = setTimeout(
  () =>
    // Função de seta passada como argumento para write2OnConsoleAndRetunString
    write2OnConsoleAndRetunString(message => message ? 'Procedure Completed' : 'Procedure not Completed'),
  2000
);

// Função que recebe uma função de retorno como argumento
function write2OnConsoleAndRetunString(callbackFunction) {
  console.log(2);
  // Executa a função de retorno passada, passando a string "Procedure Completed"
  callbackFunction(true);
}
