//function BankAccount(personName, initialBalance, address) {
//  this.personName = personName;
//  this.balance = initialBalance;
//  this.address = address;
//
//  this.printInfo = () => {
//    console.log(
//      `Essa conta pertence a ${this.personName}, residente do endereço '${
//        this.address
//      }' e possui um saldo atual de ${Number(this.balance).toFixed(2)} reais;`
//    );
//  };
//}

//const ba1 = new BankAccount("Davi", 2000, "Rua que sobe e desce");

//ba1.pritInfo();
//console.log(ba1 instanceof BankAccount); // retorna um bool falando se o objeto é daquela classe

class BankAccount {
  _balance = 0;
  // é uma função construtora por de baixo dos panos
  constructor(personName, initialBalance, address) {
    this.personName = personName;
    this._balance = initialBalance;
    this.address = address;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (Math.abs(this._balance - value) > 2000) {
        throw new Error("Não permitimos saques ou depósitos maiores que 2000 reais");
    }
    this._balance = value;
  }

  printInfo() {
    console.log(
      `Essa conta pertence a ${this.personName}, residente do endereço '${
        this.address
      }' e possui um saldo atual de ${Number(this._balance).toFixed(2)} reais;`
    );
  }
}

const ba1 = new BankAccount("Davi", 2000, "Rua que sobe e desce");

// ba1.printInfo();
// console.log(ba1 instanceof BankAccount); // retorna um bool falando se o objeto é daquela classe

// ba1.balance += 4000
ba1.balance -= 1900

console.log(ba1.balance)
