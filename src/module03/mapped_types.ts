const arrayofNumbers = [1,2,3];
const arrayofStrings = arrayofNumbers.map((number) => number.toString());
console.log(arrayofStrings);

type AreaNumber = {
    height: number;
    width: number;
};

type AreaString={
   readonly height: string;
   readonly  width: string
}

//const rectangularArea: AreaNumber

type A = AreaNumber['height']
type B = keyof AreaNumber;