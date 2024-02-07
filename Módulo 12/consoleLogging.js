console.log(1);
const result = setTimeout(write2OnConsoleAndRetunString, 2000);
console.log(result);

function write2OnConsoleAndRetunString() {
  console.log(2);
  return "Procedure Completed";
}
