class BankAccount {
     name: string;
     balance: number;

     constructor(name: string, balance?: number) {
          this.name = name;

          if (balance !== undefined) {
               this.balance = balance;
          }
     };

     canByNewComputer(): boolean {
          return this.balance >= 500;
     }
}

let phally = new BankAccount('Phally');
console.log(phally.canByNewComputer());

let sara = new BankAccount("sara", 800);
console.log(sara.canByNewComputer());