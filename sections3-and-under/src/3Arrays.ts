//Arrays
const duties: string[] = ["writing code"];

duties.push("fix bugs");
duties.push("4");
duties.push("[]");

duties.map((duty) => {
  console.log(duty.toUpperCase().slice(2, 5).toLocaleLowerCase());
});

// Tupples:
let employeeLockerCode: [string, number] = ["John", 345];
employeeLockerCode = ["5", 6];
employeeLockerCode.push(12);
console.log(employeeLockerCode);
