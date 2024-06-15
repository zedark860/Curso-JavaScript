// Factory Function

function createAccount(username, accountNumber, initialBalance) {
  return {
    name: username,
    accountNumber: accountNumber,
    balance: initialBalance,
    displayBalance: function () {
      console.log(
        `account number ${this.accountNumber} has a total balance of ${this.balance}`
      );
    },
  };
}

const account1 = createAccount("Davi", "123456778-9", 500);
console.log(account1);
account1.displayBalance();

