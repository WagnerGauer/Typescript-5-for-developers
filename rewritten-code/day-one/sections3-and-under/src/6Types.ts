type Position = "Programmer" | "HR";

const myPosition: Position = "Programmer";

type Colleague = {
  name: string;
  age: number;
  position: Position;
  greetBack?: Function;
};

const myColleague: Colleague = {
  name: "John",
  age: 30,
  position: "HR",
};

const myOtherColleague: {
  name: string;
  age: number;
  position: Position;
  tasks: string[];
} = {
  name: "Mary",
  age: 24,
  position: "Programmer",
  tasks: ["Programmer stuff"],
};

const myTalkyColleague: Colleague = {
  name: "John",
  age: 34,
  position: "HR",
  greetBack: () => {
    console.log("Cheers!!!!");
  },
};

const greetColleague = (colleague: Colleague) => {
  console.log(`Hi ${colleague.name}`);
  if (colleague.greetBack) {
    colleague.greetBack();
  }
};

greetColleague(myColleague);
greetColleague(myOtherColleague);
greetColleague(myTalkyColleague);
