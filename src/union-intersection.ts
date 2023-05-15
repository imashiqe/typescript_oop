type NoobDeveloper = {
     name:string
};

type JuniorDeveloper ={
     name:string;
     expertise: string;
     experience: number;
};


const newDeveloper: NoobDeveloper | JuniorDeveloper ={
    name: 'Moznu Mia',
    expertise: "Javascript",
    experience : 1,
   // level:2
   };

type NextLevelDeveloper = NoobDeveloper & {
    leadershipExperience: number;
}