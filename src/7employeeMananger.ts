import { randomBytes } from "crypto";

export type Employee = {
  name: string;
  id: string;
  email: string;
  salary: number;
};

const generateRandIds = () => {
  return randomBytes(10).toString("hex");
};

export const createEmployee = (
  employeeName: string,
  salary: number
): Employee => {
  return {
    name: employeeName,
    id: generateRandIds(),
    email: `${employeeName}@coolcompany.com`,
    salary: salary,
  };
};

const Jack = createEmployee("Jack", 233423);
const Bill = createEmployee("Bill", 2323443333);
const allNewEmployees = [Jack, Bill];

const sendWelcomeMessage = (employee: Employee) => {
  console.log(`To ${employee.name}
  Hello ${employee.name}!
  Welcome to our awesome company!
  Your salary will be ${employee.salary} Dollars
    `);
};

allNewEmployees.forEach((employee) => {
  sendWelcomeMessage(employee);
});
