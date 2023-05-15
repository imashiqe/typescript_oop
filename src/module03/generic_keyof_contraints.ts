type PersonType = {
     name: string;
     age: number;
     address: string;
};

type newType = "name" | "age" | "address"; //manully korsi

//type newTypeUsingKeyOf = Keyof PersonType

// const a : newType = 'age'
// conts b: newTypeUsingKeyOf = 'hh

// ({name: 'Mr.X' , age:100}, 'age) //100