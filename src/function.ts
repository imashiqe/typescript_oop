//  normal function 
//  default  parameter

//spread  operator
const myFriends = ["Chandler", "joey", "ross"];
const newFriends = ["monica" , "rachel" , "pheobe"];

myFriends.push(...newFriends);
console.log(myFriends);

const greetFriends = (
     friend1: string,
     friend2: string,
     friend3: string

): void => console.log(`Hi ${friend1} \n Hi ${friend2}\n Hi ${friend2}`);

//greetFriends("Kashem" , "Hashem" , "gashem", "lashem" , 'bangla bhai');

function add(num1:number,num2:number):number{
    return num1 + num2;

}


//array object destrutering    



const addArrow = (num1:number, num2:number): number => num1 + num2;

const arr= [1,4,5];

const newArray = arr.map((elem :number) => elem*elem);

const person: {
     name:string,
     balance:number,
     addBalance(money: number): string;
}= {
    name: 'Mezba',
    balance: 5,
    addBalance(money:number)
    {
        return `My New Balance is ${this.balance + money}`;
    },
}