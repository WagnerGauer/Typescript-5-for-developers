function doStuff(arg: string | number) {
  if (typeof arg === "string") {
    console.log(arg);
    return;
  }
  if (typeof arg === "number") {
    console.log(arg);
    return;
  }
  console.log(arg); //will never happen, the type is never
}
