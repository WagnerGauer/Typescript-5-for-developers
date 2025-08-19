const johnSalary = {
    amount: 4000,
    currency: "USD",
    yearlyBonus: 10,
};
const john = {
    name: "John",
    salary: {
        amount: 4000,
        currency: "USD",
    },
};
const paySalary = (empl, extraWork) => {
    console.log(`Payed ${empl.salary.amount} ${empl.salary.currency} to ${empl.name}`);
    if (empl.salary.yearlyBonus) {
        console.log(`${empl.name} received bonus of ${empl.salary.yearlyBonus}`);
    }
    if (extraWork) {
        console.log(`${empl.name} received EXTRA bonus because of the hard work in ${extraWork}`);
    }
};
paySalary(john);
paySalary(john, "code reviews");
export {};
//# sourceMappingURL=9.1OptionalModifiers.js.map