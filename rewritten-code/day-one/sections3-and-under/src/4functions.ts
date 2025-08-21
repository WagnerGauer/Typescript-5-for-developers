function greet(name: string) {
  return `Hello ${name}`;
}

let greeting: string = "";

greeting = greet("John").toUpperCase();

function consoleGreetJohn(name = "John") {
  console.log(`Hello ${name.toUpperCase()}`);
}

consoleGreetJohn();
consoleGreetJohn("Bill");

const greetToConsole = (name: string) => {
  console.log(`Hello ${name}`);
};

const greetMultiple = (...names: string[]) => {
  names.forEach((name) => {
    greetToConsole(name);
  });
};

greetMultiple("John");
greetMultiple("Bill", "John", "Josh");
