import { EventEmitter } from "node:events";

// o evento só escuta o objeto de mesma instância
//const eventEmitter = new EventEmitter();

//eventEmitter.on("Evento1 Lançado", (login, password) => {
//  console.log(
//    `Escutei o evento1! O usuário ${login}, quer acessar com a senha: ${password}`
//  );
//});

//eventEmitter.emit("Evento1 Lançado", "Daviteste", "123");

class CompanySales extends EventEmitter {
  performSale() {
    console.log("Resgistrando venda no banco de dados");

    super.emit("Venda realizada!");
  }
}

function sendToBigCompanyTv(message) {
  console.log("--------------------------");
  console.log(message);
}

const sales = new CompanySales();

sales.on("Venda realizada!", () => {
  sendToBigCompanyTv("Mais uma venda realizada!");
});
sales.performSale();
