class Animal {
    name: string;
    species : string;
    sound : string;

    constructor(name:string, species: string, sound: string)
    {
        this.name = name;
        this.species = species;
        this.sound =sound;
    }
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`); // German  Shephared says Ghew Ghew
    }
}

const dog = new Animal("German  Shepared" , "dog" , "Ghew Ghew");