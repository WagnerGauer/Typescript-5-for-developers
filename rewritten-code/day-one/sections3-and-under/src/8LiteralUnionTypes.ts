type Programmer = "Programmer";
type HR = "HR";

let bestProgrammer: Programmer = "Programmer";

type PositionType = Programmer | HR;

type Position = "Programmer" | "HR" | "CEO";

const getSalaryForPosition = (position: Position): number | undefined => {
  if (position === "Programmer") {
    bestProgrammer = position;
    return 234;
  }
  if (position === "HR") {
    return 32;
  }

  console.warn(`We don't have salary for position ${position}`);
};
getSalaryForPosition("CEO");
getSalaryForPosition("HR");
getSalaryForPosition("Programmer");
