// Mocking

const makePromise = () => {
    new Promise((resolve, reject) => {
         const data: string = "Data is fatched";
         if(data)
         {
            resolve(data);
         }else {
             reject("Failed to feted data!");
         }
    });
}

// const getPromiseData=() async (): Promise <string> =>{
//      const data = await makePromise();
//      console.log(data);
// };