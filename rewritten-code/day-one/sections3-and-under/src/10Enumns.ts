export {};

// enums: a group of constants
enum Position {
  Programmer = "Programmer",
  HR = "HR",
  Manager = "Manager",
  /**
   * Must receive at least 2000% yearly bonus
   */
  CEO = "CEO",
}

type Employee = {
  name: string;
  salary: number;
  position: Position;
};

function payBonus(empl: Employee) {
  //Paye CEO bonus
  if (empl.position === Position.CEO) {
    // surprise bonus
  }
}

/**
 * CEO bonus: ...
 * Programmer bonus: ...
 */
type PositionType = "Programmer" | "CEO" | "HR";

function payAnnualBonus(empl: Employee) {
  let bonusPercent: number = 0;
  const position = empl.position;
  switch (position) {
    case Position.Programmer:
      bonusPercent = 0.2;
      break;
    case Position.CEO:
      bonusPercent = 200;
      break;
    case Position.HR:
      bonusPercent = 0.8;
      break;
    case Position.Manager:
      bonusPercent = 20;
      break;
    default:
      const remainingValues: never = position;
      break;
  }
  console.log(
    `Paying ${empl.salary * bonusPercent} as a bonus to ${empl.name}`
  );
}
