//keyof guard
type Alphanumeric = string | number
function add(param1:Alphanumeric, param2: Alphanumeric): Alphanumeric {
    if(typeof param1 =="number" && typeof param2 === "number")
    {
        return param1+param2
    }else{
        return param1.toString()+ param2.toString();
    }
}

add('1', '2')
add(1,2)

//in guard

type NormalUserType={
    name:string;

}

type AdminUserType={
    name:string;
    role: 'admin'
};

function getUser(user:NormalUserType|AdminUserType){
    if('role' in user)
    {
        return `I am an admin and my role is ${user.role}`
    }else{
        return ` I am normal user`
    }
}

const normalUser1 : NormalUserType={name: 'Mr. kallu'}
const adminUser1: AdminUserType = { name: "Mr. Gallu", role:"admin"};

console.log(getUser(normalUser1));

//instaceof guard

// class Animal{
//     name: string;
//     species: string;
//     constructor(name: string,species:string)
//     {
//         this.name=name
//         this.species=species
//     }

//     makeSound(){
//         console.log("I am making sound");
//     }

// }

// class Dog extends Animal {
//     constructor(name: string, species: string){
//          super(name, species);
//     }
//     makeBark(){
//         console.log('I am barking');
//     }
// }