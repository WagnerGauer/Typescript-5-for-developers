type Manager = {
  team?: {
    scrumMaster?: {
      holdScrumMeetings: () => void;
    };
  };
};

const manage = (manager: Manager) => {
  manager.team?.scrumMaster?.holdScrumMeetings();
};

const manageAssertion = (manager: Manager) => {
  manager.team!.scrumMaster!.holdScrumMeetings();
};

const manageOldWay = (manager: Manager) => {
  if (manager.team && manager.team.scrumMaster) {
    manager.team.scrumMaster.holdScrumMeetings();
  }
};
