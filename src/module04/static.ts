class Counter{
    counter:number;
    constructor(counter:number){
        this.counter =counter;
    }
    increment()
    {
       return this.counter = this.counter+1
    }
    decrement(): number {
        return (this.counter =this.counter - 1);
    }
}

const instance1 = new Counter(0);
const instance2 = new Counter(1);

console.log(instance1.increment());
console.log(instance2.increment());

