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
// Using the assertion operator should be AVOIDED, what it basically allows me todo is to
// say that I know better and that I know that there is a scrumMaster or holdScrumMeeting
//  property and typescript should not worry about it

const manageOldWay = (manager: Manager) => {
  if (manager.team && manager.team.scrumMaster) {
    manager.team.scrumMaster.holdScrumMeetings();
  }
};

// ? - optional operator - JS feature
// ! - non-null assertion operator - TS feature
