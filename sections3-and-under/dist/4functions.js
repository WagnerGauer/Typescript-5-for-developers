function greet(name) {
    return `Hello ${name}`;
}
let greeting = "";
greeting = greet("John").toUpperCase();
function consoleGreetJohn(name = "John") {
    console.log(`Hello ${name.toUpperCase()}`);
}
consoleGreetJohn();
consoleGreetJohn("Bill");
const greetToConsole = (name) => {
    console.log(`Hello ${name}`);
};
function greetMultiple(...names) {
    names.forEach((name) => {
        greetToConsole(name);
    });
}
greetMultiple("John");
greetMultiple("John", "Mary");
export {};
//# sourceMappingURL=4functions.js.map