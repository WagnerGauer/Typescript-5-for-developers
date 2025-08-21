// interfaces: contract between code compones

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
    public scrumMaster: ScrumMaster
  ) {
    this.name = name;
    this.budget = budget;
    this.scrumMaster;
  }

  holdProjectMeeting() {
    this.scrumMaster.holdScrumMeeting();
  }
}

const superManager = new SwissArmyKnife();
const basicProject = new Project("Basic project", 100000, superManager);
