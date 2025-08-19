export {};
// Type guard: narrow down an object
// Type predicate
const isSalary = (arg) => {
    return "amount" in arg && typeof arg.amount === "number";
};
function paySalary(arg) {
    if (isSalary(arg)) {
        console.log(`Payig ${arg.amount}`);
    }
}
//# sourceMappingURL=8.4TypeGuards.js.map