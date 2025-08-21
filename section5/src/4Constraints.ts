export {};

type objectWithTeam = {
  team: string;
};

type Programmer = objectWithTeam & {
  name: string;
  language: string;
};

function updateTeam<T extends objectWithTeam>(arg: T, newTeam: string): T {
  arg.team = newTeam;
  return arg;
}

let empl1: Programmer = {
  name: "John",
  language: "C#",
  team: "CoolTeam",
};

console.log(updateTeam(empl1, "SuperCoolTeam"));

function updateTeamNotGeneric(
  arg: objectWithTeam,
  newTeam: string
): objectWithTeam {
  arg.team = newTeam;
  return arg;
}

let empl2: Programmer = {
  name: "Bill",
  language: "TS",
  team: "AwesomeTeam",
};

console.log(updateTeamNotGeneric(empl2, "SuperAwesomeTeam"));

// this makes it so T will be equal to Basic if no value inside <> is specified when creating an object
type OldSchoolProgrammer<T extends "Basic" | "Lisp" = "Basic"> = {
  language: T;
  name: string;
};

const myCoolColleague: OldSchoolProgrammer<"Basic"> = {
  language: "Basic",
  name: "John",
};
