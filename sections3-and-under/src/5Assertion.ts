type SimpleJob = {
  codingLanguage: string;
  sourceControl: string;
};

type ComplicatedJob = {
  codingLanguage: string;
  sourceControl: string;
  hasManyMeetings: true;
  reportsToBeCompleted: string[];
};

type QaJob = {
  scriptingLanguage: string;
  hasAutomatedTests: true;
};

let simpleJob: SimpleJob = { codingLanguage: "TS", sourceControl: "git" };

let complicatedJob: ComplicatedJob = {
  codingLanguage: "TS",
  sourceControl: "git",
  hasManyMeetings: true,
  reportsToBeCompleted: ["hourly", "daily", "weekely"],
};

let qaJob: QaJob = {
  scriptingLanguage: "Python",
  hasAutomatedTests: true,
};

simpleJob = complicatedJob;

// complicatedJob = simpleJob
// This dos not work, I would have to use type assertion to enforce it
// I should be careful about using type assertions
complicatedJob = simpleJob as ComplicatedJob;

// Because qaJob does not share any properites with complicatedJob I
// need to use a double assertion - Be caretul with assertions!
complicatedJob = qaJob as unknown as ComplicatedJob;

// same meaning:
complicatedJob = <ComplicatedJob>simpleJob;
complicatedJob = <ComplicatedJob>(<unknown>qaJob);

// usage: build objects in steps
// advantage: autocomplete assistance
// disadvantage: the compiler won't complain about incomplete objects
const complicatedJobMadeInSteps = {} as ComplicatedJob;
complicatedJobMadeInSteps.codingLanguage = "C#";
complicatedJobMadeInSteps.hasManyMeetings = true;
complicatedJobMadeInSteps.reportsToBeCompleted = [];
complicatedJobMadeInSteps.sourceControl = "git";
