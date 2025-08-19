export {};

abstract class AbstractProject {
  constructor(public name: string, public budget: number) {
    this.name = name;
    this.budget = budget;
  }

  printBudget() {
    console.log(`${this.name} has a budget of ${this.budget}`);
  }

  abstract makeDelivery(): void;
}

class AiProject extends AbstractProject {
  makeDelivery(): void {}
}

const coolProject = new AiProject("CoolProject", 10000);
