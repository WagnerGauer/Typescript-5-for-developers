export {};

// Contract between function arguments and returned values types

// Dump requirement: Build a function that wraps it's arguments into an array
function toArray(arg: any) {
  return [arg];
}

const myArray = toArray("My name");

function toArrayFromString(arg: string) {
  return [arg];
}
function toArrayFromNumber(arg: number) {
  return [arg];
}
function toArrayFromBoolean(arg: boolean) {
  return [arg];
}

function toArrayGeneric<T>(arg: T): [T] {
  return [arg];
}

const myNameArray = toArrayGeneric("Bill");
