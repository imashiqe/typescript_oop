// class Student {
//      name: string;
//      age: number;
//      address: string;

//      constructor(name:string, age: number, address: string)
//      {
//         this.name =name;
//         this.age =age;
//         this.address =address;

//      }

//      makeSleep(hourse:number):{
//         return `This ${this.name} will sleep for ${hours}`;
//      }
// }

class Teacher{
    name:  string;
    age: number;
    address: string;
    designation: string;

    constructor (name:string,age:number,address:string,designation:string){
        this.name =name;
        this.age =age;
        this.address=address;
        this.designation=designation;
    }

    makeSleep(hours:number): string {
        return `This ${this.name} will  sleep for ${hours}`;
    }
    // takeClasses(class:number): string {
    //     return `This ${this.name} will  take ${class} class`
    // }
}

const teacher1 = new Teacher('Mr.Y', 54, 'USA', 'Professor')


