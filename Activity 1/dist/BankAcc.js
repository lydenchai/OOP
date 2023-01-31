var BankAccount = /** @class */ (function () {
    function BankAccount(name, balance) {
        this.name = name;
        if (balance !== undefined) {
            this.balance = balance;
        }
    }
    ;
    BankAccount.prototype.canByNewComputer = function () {
        return this.balance >= 500;
    };
    return BankAccount;
}());
var phally = new BankAccount('Phally');
console.log(phally.canByNewComputer());
var sara = new BankAccount("sara", 800);
console.log(sara.canByNewComputer());
