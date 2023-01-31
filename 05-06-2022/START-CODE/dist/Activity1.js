class Account {
    constructor(balance) {
        this.balance = 0;
        this.balance = balance;
    }
    creditMoney(money) {
        if (this.balance + money < 600) {
            this.balance += money;
            return "You can credit your money amount: " + this.balance;
        }
        else {
            return "You cannot credit your money.";
        }
    }
    debitMoney(money) {
        if (this.balance - money > 0) {
            this.balance -= money;
            return "You can debit your money amount: " + this.balance;
        }
        else {
            return "You cannot debit money.";
        }
    }
}
let ronanAccount = new Account(100);
console.log(ronanAccount.creditMoney(450));
console.log(ronanAccount.debitMoney(200));
