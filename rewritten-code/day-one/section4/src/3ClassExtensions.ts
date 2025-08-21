class Project {
  constructor(public name: string, public budget: number) {
    this.name = name;
    this.budget = budget;
  }

  printBudget() {
    console.log(`${this.name} has a budget of ${this.budget}`);
  }
}

class SecretProject extends Project {
  constructor(public secrecyLevel: 1 | 2 | 3) {
    super("Secret Project", 100000);
    this.secrecyLevel = secrecyLevel;
  }

  override printBudget() {
    console.log("The budget is secret");
  }
}

const secretProject = new SecretProject(3);

secretProject.printBudget();
