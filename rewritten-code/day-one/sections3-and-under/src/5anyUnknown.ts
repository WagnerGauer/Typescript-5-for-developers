let queryResult: any = 5;
queryResult = "5";

const getSalaryFromExternalServer = (employeeId: number): unknown => {
  return JSON.parse("4");
};

let salary = getSalaryFromExternalServer(123);

if (typeof salary === "number") {
  // type narrowing
  salary++;
}

if (typeof salary === "string") {
  // type narrowing
  salary.toUpperCase();
}

if (typeof salary === "string" || typeof salary === "number") {
  // type narrowing
  salary.valueOf();
}

if (
  salary &&
  typeof salary === "object" &&
  "history" in salary &&
  Array.isArray(salary.history)
) {
  salary.history.push(12000);
}
