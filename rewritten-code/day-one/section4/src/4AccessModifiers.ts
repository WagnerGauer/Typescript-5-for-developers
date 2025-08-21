export {};
class Project {
  // private means that the variable is only accessible within this class
  // protected means that the variable is acessible only within this class or subclasses
  // public means that this variable can be accessed within this class, subclasses or outside

  public name: string;
  budget: number;

  constructor(name: string, budget: number) {
    this.name = name;
    this.budget = budget;
  }

  public printBudget() {
    console.log(`${this.name} has a budget of ${this.budget}`);
  }
}

class ProjectShorter {
  constructor(public name: string, public budget: number) {
    this.name = name;
    this.budget = budget;
  }
  printBudget() {
    console.log(`${this.name} has a budget of ${this.budget}`);
  }
}

class SecretProject extends Project {
  secrecyLevel = 1 | 2 | 3;

  constructor(secrecyLevel: 1 | 2 | 3) {
    super("Secret Project", 100000000);
    this.secrecyLevel = secrecyLevel;
  }

  override printBudget() {
    console.log("The budget is secret!!!");
  }
}

const coolProject = new Project("Cool Project", 2000);
coolProject.name = "updated name";
coolProject.printBudget();
