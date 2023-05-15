class BankAccount{
    id:number;
    name:string;
    balance:number;

    constructor(id:number,name:string,balance:number){
        this.id =id;
        this.name =name;
        this.balance =balance;

    }
   
//     getBalance()
//     {
//         console.log(`My Current Balance is ${this._balance}`);
//     }
//     addDeposit(amount: number){
//         this._balance = this._balance + amount;
//     }
 }

// class StudentAccount extends BankAccount{

// }

// const  myAccount = new BankAccount(444, "Parsian", 20)
// console.log(myAccount);