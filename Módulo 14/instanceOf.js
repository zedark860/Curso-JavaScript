function BankAccount(personName, initialBalance, address) {
  this.personName = personName;
  this.balance = initialBalance;
  this.address = address;

  this.pritInfo = () => {
    console.log(
      `Essa conta pertence a ${this.personName}, residente do endereço '${
        this.address
      }' e possui um saldo atual de ${Number(this.balance).toFixed(2)} reais;`
    );
  };
}

const ba1 = new BankAccount("Davi", 2000, "Rua que sobe e desce");

ba1.pritInfo();
console.log(ba1 instanceof BankAccount); // retorna um bool falando se o objeto é daquela classe
