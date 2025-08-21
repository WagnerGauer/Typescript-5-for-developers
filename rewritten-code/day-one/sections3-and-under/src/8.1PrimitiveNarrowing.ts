const getNumberValue = (arg: unknown): number => {
  if (typeof arg === "number") {
    return arg;
  }
  if (typeof arg === "string") {
    return Number(arg);
  }
  throw new Error(`Unsupported format: ${JSON.stringify(arg)}`);
};

console.log(getNumberValue("edfs"));
console.log(getNumberValue("23"));

getNumberValue({});
