let queryResult = 5;
queryResult = "5";
queryResult = 5;
function getSalaryFromExternalService(employeeId) {
    return JSON.parse("5");
}
let salary = getSalaryFromExternalService(123);
if (typeof salary === "number") {
    // type narrowing
    salary++;
}
if (typeof salary === "string") {
    // type narrowing
    salary.includes("$");
}
if (typeof salary === "string" || typeof salary === "number") {
    // type narrowing
    salary.valueOf();
}
if (salary &&
    typeof salary === "object" &&
    "history" in salary &&
    Array.isArray(salary.history) // type narrowing - that's a pretty precise narrowing
) {
    salary.history.push(12000);
}
export {};
// When to use any?
// Start of JS to TS migration
// Inside unit tests
//# sourceMappingURL=5anyUnknown.js.map