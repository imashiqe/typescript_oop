let emni: any;

emni = "Next level web development";

(emni as string).length;


function KgToGram(param: string | number): string | number | undefined
{
    if(typeof param === "string")
    {
        const value = parseFloat(param) * 1000;
        return `The Converted result is: ${value} gram`;

    }
    if(typeof param === "number")
    {
        const value = param * 1000;
        return value;
    }
}

const resultToBeNumber = KgToGram(1000) as number;
const resultToBeString = KgToGram(1000) as number;

