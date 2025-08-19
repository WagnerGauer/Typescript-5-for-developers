export {};

class Project {
  //this means that this variable can only be accessed within this class
  // private name: string;
  // this means that this variable can be acessed within subclasses too
  // protected name: string;
  public name: string;
  budget: number;

  constructor(name: string, budget: number) {
    this.name = name;
    this.budget = budget;
  }

  printBudget() {
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
  secrecyLevel: 1 | 2 | 3;

  constructor(secrecyLevel: 1 | 2 | 3) {
    super("Secret project", 100000);
    this.secrecyLevel = secrecyLevel;
  }

  override printBudget() {
    console.log("The budget is secret!!!");
  }
}

const coolProject = new Project("CoolProject", 10000);
coolProject.name = "UpdatedName";
coolProject.printBudget;
