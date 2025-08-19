const manage = (manager) => {
    manager.team?.scrumMaster?.holdScrumMeetings();
};
const manageAssertion = (manager) => {
    manager.team.scrumMaster.holdScrumMeetings();
};
// Using the assertion operator should be AVOIDED, what it basically allows me todo is to
// say that I know better and that I know that there is a scrumMaster or holdScrumMeeting
//  property and typescript should not worry about it
const manageOldWay = (manager) => {
    if (manager.team && manager.team.scrumMaster) {
        manager.team.scrumMaster.holdScrumMeetings();
    }
};
export {};
// ? - optional operator - JS feature
// ! - non-null assertion operator - TS feature
//# sourceMappingURL=9.3OptionalChaining.js.map