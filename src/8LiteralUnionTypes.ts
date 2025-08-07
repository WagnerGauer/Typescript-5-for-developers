type Programmer = "Programmer";
type HR = "HR";

const bestProgrammer: Programmer = "Programmer";

type PositionType = Programmer | HR;

type Position = "Programmer" | "HR" | "CEO";

function getSalaryForPosition(position: Position): number | undefined {
  if (position === "Programmer") {
    return 232;
  }
  if (position === "HR") {
    return 32;
  }
  console.warn(`We don't havea a salary for ${position}`);
}
