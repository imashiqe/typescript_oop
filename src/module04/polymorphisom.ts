class Person {
    takeNap(){
        console.log('I  am  sleeping  8 hourse  per  day  ');
    }

}

 class  Student  extends Person {
     test(): void{
        console.log('I am  sleeping 10 hourse per day');
     }
 }

 class Developer extends Person {
     takeNap(): void {
         console.log(`I am  sleeping 5 hours per day`);
     }
 }


 function getNap(param: Person)
 {
    param.takeNap();
 }

 const person1 = new Person()
 const person2 = new Student()
 const person3 = new Developer()

 getNap(person1);
 getNap(person2);
 getNap(person3);

class Shape {
    getArea(){}
}
// area -> pi *r *r
class Circle extends Shape{
   radius: number;
   constructor(radius : number)
   {
    super();
    this.radius =radius;
   }

  
   getArea(): number {
       return Math.PI * this.radius * this.radius;
   }
   }

   class Rectangle extends Shape{
     height: number;
     width : number;
     constructor(height:number, width:number){
        super()
        this.height=height;
        this.width =width;
     }

     getArea(): number {
         return this.width * this.height;
     }
   }

   function getAreaofShape(param: Shape){
    console.log(param.getArea());
   }

   getAreaofShape(new Circle(10));
   getAreaofShape(new Rectangle(10,12));