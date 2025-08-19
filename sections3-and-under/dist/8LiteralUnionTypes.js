let bestProgrammer = "Programmer";
function getSalaryForPosition(position) {
    if (position === "Programmer") {
        bestProgrammer = position;
        return 232;
    }
    if (position === "HR") {
        return 32;
    }
    console.warn(`We don't havea a salary for ${position}`);
}
export {};
//# sourceMappingURL=8LiteralUnionTypes.js.map