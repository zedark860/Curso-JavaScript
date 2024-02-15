console.log(1);
// Primeiro é criada uma função anônima que chama a funação de fora
// Depois dentro da função normal colocamos como parâmetro a função e chamamos ela com argumento
// O argumento recebido será uma arrow function, nisso ela recebe o parâmetro de onde está sendo chamada
// Nesse caso é um texto, esse texto (poderia ser qualquer coisa) fica como parâmetro
// Usamos ele dentro da função para executar o que precisarmos
const result = setTimeout(
  () =>
    write2OnConsoleAndRetunString(message => {
      console.log(message);
      console.log(message + " - mensagem escrita no console por uma segunda vez");
    }),
  2000
);

function write2OnConsoleAndRetunString(callbackFunction) {
  console.log(2);
  callbackFunction("Procedure Completed");
}

