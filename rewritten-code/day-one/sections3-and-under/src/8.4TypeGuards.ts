export {};

type Salary = {
  amount: number;
};

const isSalary = (arg: any): arg is Salary => {
  return (
    typeof arg === "object" &&
    arg !== null &&
    "amount" in arg &&
    typeof arg.amount === "number"
  );
};

function paySalary(arg: unknown) {
  console.log(isSalary(arg));
  if (isSalary(arg)) {
    console.log(`Paying ${arg.amount}`);
  }
}

paySalary({ amount: 23 });

console.log("cat");
