// interfaces: contract between code components

interface HrManager {
  getAllSalaries(): string[];
}

interface ScrumMaster {
  holdScrumMeeting(): void;
}

class SwissArmyKnife implements HrManager, ScrumMaster {
  getAllSalaries(): string[] {
    return [];
  }

  holdScrumMeeting(): void {
    console.log("Holding a scrum meeting");
  }
}

class Project {
  constructor(
    public name: string,
    public budget: number,
    // because I am annotating with the scrumMaster interface, only
    // methods defined within that interface are available, I cannot access methods
    // from HrManager interface
    public scrumMaster: ScrumMaster
  ) {
    this.name = name;
    this.budget = budget;
    this.scrumMaster = scrumMaster;
  }

  holdProjectMeeting() {
    this.scrumMaster.holdScrumMeeting();
  }
}

const superManager = new SwissArmyKnife();
const basicProject = new Project("Basic project", 100, superManager);
