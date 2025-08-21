import { randomBytes } from "crypto";

export type Employee = {
  name: string;
  id: string;
  email: string;
  salary: number;
};

const generateRandomIds = () => {
  return randomBytes(10).toString("hex");
};

export const createEmployee = (
  employeeName: string,
  salary: number
): Employee => {
  return {
    name: "John",
    id: generateRandomIds(),
    email: `${employeeName}@coolcompany.com`,
    salary: salary,
  };
};

const Jack = createEmployee("Jack", 23232);
const Bill = createEmployee("Bill", 232234);
const allNewEmployees = [Jack, Bill];

const sendWelomeMessage = (employee: Employee) => {
  console.log(employee.id);
  console.log(`To ${employee.name} 
  Hello ${employee.name}!
  Welcome to our awesome company!
  your salary will be ${employee.salary} Dollars`);
};

allNewEmployees.forEach((employee) => {
  sendWelomeMessage(employee);
});
