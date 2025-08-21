let CEO = "Jeff"; // strings are immutable

const CeoObject = {
  //objects are not immutable
  name: "Jeff",
  company: "Amazon",
};

CeoObject.name = "Bill";

function toUpperCaseNames(names: readonly string[]) {
  // names.push("sfsd");
  return names.map((name) => {
    return name.toUpperCase();
  });
}

type Postion = "Programmer" | "Manager" | "HR" | "Scrum master";

type Employee = {
  name: string;
  position: Postion;
};

function paySalary(empl: Employee) {
  console.log(`The pay for ${empl.position} is 1000`);
}
const john = {
  name: "John",
  position: "Programmer" as const,
};
// const john = {
//   name: "John",
//   position: "Programmer" ,
// } as const

// const john: Employee = {
//   name: "John",
//   position: "Programmer" as const,
// };

paySalary(john);
