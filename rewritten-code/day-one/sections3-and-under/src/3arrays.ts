// Arrays
const duties: (string | number)[] = ["writing code"];

duties.push("fix bugs");
duties.push("4");
duties.push("[]");
duties.push(34);
// I cannot push values that are not allowed to an array

duties.map((duty) => {
  if (typeof duty === "string") {
    console.log(duty.toLowerCase().split("g"));
  }
});

// Tupples
let employeeLockerCode: [string, number] = ["John", 23];

employeeLockerCode = ["Josh", 45];
employeeLockerCode.push(23);
console.log(employeeLockerCode);

// I can push other items that are not allowed to a tupple and typescript won't complain
// employeeLockerCode = ["sds", 23, "another value"]
