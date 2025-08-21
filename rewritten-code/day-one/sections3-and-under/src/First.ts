type WithName = {
  name: string;
};

const printName = (arg: WithName) => {
  console.log(arg.name);
};
