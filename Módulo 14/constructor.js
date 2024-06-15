//function createAccount(username, accountNumber, initialBalance) {
//  return {
//    name: username,
//    accountNumber: accountNumber,
//    balance: initialBalance,
//    displayBalance: function () {
//      console.log(
//        `account number ${this.accountNumber} has a total balance of ${this.balance}`
//      );
//    },
//  };
//}

// Constructor

function Account(username, accountNumber, initialBalance) {
  this.name = username;
  this.accountNumber = accountNumber;
  this.balance = initialBalance;
  this.displayBalance = () => {
    console.log(
      `account number ${this.accountNumber} has a total balance of ${this.balance}`
    );
  };
}

const account1 = new Account("Davi", "123456778-9", 500);
console.log(account1);
account1.displayBalance();
