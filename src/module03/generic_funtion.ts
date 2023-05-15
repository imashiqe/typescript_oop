//arrow funtion 

const createArray =(param:string): string[] => {
    return [param];
};
const createArray1 = <T>(param: T): T[] => {
    return [param];
};

const result1 =createArray1<string>("Bangladesh");
const result2 = createArray1<boolean>(false);

const result3 = createArray1<{name: string}>({name: "Bangladesh"});