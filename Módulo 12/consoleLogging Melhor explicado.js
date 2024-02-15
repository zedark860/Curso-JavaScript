console.log(1);

// Aguarda 2 segundos antes de executar a função de seta
const result = setTimeout(
  () =>
    // Função de seta passada como argumento para write2OnConsoleAndRetunString
    write2OnConsoleAndRetunString(message => {
      // Dentro da função passada como argumento, imprime a mensagem no console duas vezes
      console.log(message);
      console.log(message + " - mensagem escrita no console por uma segunda vez");
    }),
  2000
);

// Função que recebe uma função de retorno como argumento
function write2OnConsoleAndRetunString(callbackFunction) {
  console.log(2);
  // Executa a função de retorno passada, passando a string "Procedure Completed"
  callbackFunction("Procedure Completed");
}
