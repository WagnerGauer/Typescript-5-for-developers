// Type aliases: define the shape of an object
const myPosition = "Programmer";
const myColleague = {
    name: "John",
    age: 30,
    position: "HR",
};
const myOtherColleague = {
    name: "Mary",
    age: 30,
    position: "Programmer",
    tasks: ["HR stuff"],
};
const myTalkyColleague = {
    name: "John",
    age: 30,
    position: "Programmer",
    greetBack: () => {
        console.log("Cheers!!!!!");
    },
};
function greetColleague(colleague) {
    console.log(`Hi ${colleague.name}`);
    if (colleague.greetBack) {
        colleague.greetBack();
    }
}
greetColleague(myColleague);
greetColleague(myOtherColleague);
greetColleague(myTalkyColleague);
export {};
//# sourceMappingURL=6Types.js.map