//interface

interface IVehicle{
    name:string;
    model:string;
}


const vehicle: IVehicle ={
    name: "Car",
    model: "2000",
};
//abstract class

// class Vehicle implements IVehicle {

//     constructor(
//         public name: string,
//         public brand: string,
//         public model: number,
//     ){}

//      startEngine (): void {
//          console.log("I am  starting engine...");
//      }
//      stopEngine(): void {
//         console.log("I am shopping engine");
//      }
//      move(): void {
//         console.log("I am shopping engine");
//      }
//      test()
//      {
//         console.log("I am for testing purpose");
//      }
// }

// const Vehicl1 = new Vehicle("Car" , "Toyota", 2000);