//  contst newData = {...myInfo , crush};
const addMeInMyCrushMind = <T extends {name:string,age:number, salary:number}>(myInfo: T) => {
     const crush = "kate winslet";
     const newData = {...myInfo, crush};
     return newData;
};

type MyInFoType = {
    name:string;
    age:number;
    salary:number;
}
const myInfo: MyInFoType  = {
     name: "Parsian",
     age: 100,
     salary: 10000000
}

const result5 = addMeInMyCrushMind(myInfo);
