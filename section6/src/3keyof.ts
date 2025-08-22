export {};

type Position = "Programmer" | "Manager" | "HR" | "Scrum Master";

type Employee = {
  name: string;
  position: string;
};

type EmployeeKeys = keyof Employee; // "name" | "postion"

const john: Employee = {
  name: "John",
  position: "Programmer",
};

john["name"];

function getProperty2(arg: any, key: string) {
  console.log(arg[key]);
  return arg[key];
}
function getProperty1<T, K extends keyof T>(arg: T, key: K): T[K] {
  console.log(arg[key]);
  return arg[key];
}

const johnsName1 = getProperty1(john, "name");
getProperty1(john, "position");
// getProperty1(john, "age");

const johnsName2 = getProperty2(john, "name");
getProperty2(john, "position");
getProperty2(john, "age");

function getObjectKeys2<T extends object>(arg: T) {
  return Object.keys(arg);
}

function getObjectKeys<T extends Record<string, any>>(arg: T): Array<keyof T> {
  return Object.keys(arg);
}

const someKeys = getObjectKeys([]);
const someKeys2 = getObjectKeys2([]);
const existingKeys = getObjectKeys({
  abc: "def",
  cat: "sdfs",
});

console.log(someKeys, someKeys2, existingKeys);
