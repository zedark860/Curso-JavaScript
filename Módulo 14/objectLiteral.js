// object literal
const account1 = {
  name: "Davi",
  accountNumber: "123456778-9",
  balance: 500,
  displayBalance: function() {
    console.log(
      `account number ${this.accountNumber} has a total balance of ${this.balance}`
    );
  },
};

console.log(account1["displayBalance"]());
