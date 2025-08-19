const getNumberValue = (arg) => {
    if (typeof arg === "number") {
        return arg;
    }
    if (typeof arg === "string") {
        return Number(arg);
    }
    throw new Error(`Unsupported format: ${JSON.stringify(arg)}`);
};
console.log(getNumberValue("sds"));
console.log(getNumberValue("23"));
getNumberValue({});
export {};
//# sourceMappingURL=8.1PrimitiveNarrowing.js.map