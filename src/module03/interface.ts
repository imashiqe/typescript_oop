type User  = {
   name : string;
   age: number;
};

interface IUser {
     name: string;
     age: number;
};

interface extendUser extends IUser {
      role : string;
}

// const user_5: IExtendedUser = {
//       name: "Omanush",
//       age: 2000,
//       role: "Unknown",

// };

const userWithTypeAlias: User={
    name: 'Type Alias' ,
    age: 100
};

const userWithInterface: IUser = {
     name: "Interface",
     age: 200,
}
