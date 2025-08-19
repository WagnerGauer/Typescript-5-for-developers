export {};

type Salary = {
  amount: number;
};

// Type guard: narrow down an object
// Type predicate

const isSalary = (arg: any): arg is Salary => {
  return "amount" in arg && typeof arg.amount === "number";
};

function paySalary(arg: unknown) {
  if (isSalary(arg)) {
    console.log(`Payig ${arg.amount}`);
  }
}
