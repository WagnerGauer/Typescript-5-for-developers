type bonusPercent = 10 | 20 | 30;

type Salary = {
  amount: number;
  currency: "USD" | "EUR";
  yearlyBonus?: bonusPercent;
};

type Employee = {
  name: string;
  salary: Salary;
};

const johnSalary: Salary = {
  amount: 4000,
  currency: "USD",
  yearlyBonus: 10,
};

const john: Employee = {
  name: "John",
  salary: {
    amount: 4000,
    currency: "USD",
  },
};

const paySalary = (empl: Employee, extraWork?: string) => {
  console.log(
    `Payed ${empl.salary.amount} ${empl.salary.currency} to ${empl.name}`
  );
  if (empl.salary.yearlyBonus) {
    console.log(`${empl.name} received bonus of ${empl.salary.yearlyBonus}`);
  }
  if (extraWork) {
    console.log(
      `${empl.name} received EXTRA bonus because of the hard work in ${extraWork}`
    );
  }
};

paySalary(john);
paySalary(john, "code reviews");
