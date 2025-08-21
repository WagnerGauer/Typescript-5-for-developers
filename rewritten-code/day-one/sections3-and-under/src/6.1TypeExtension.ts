type SimpleJob = {
  codingLanguage: string;
  sourceControl: string;
};

type ComplicatedJob = SimpleJob & {
  hasManyMeetings: true;
  reportsToBeCompleted: string[];
};

let complicatedJob: ComplicatedJob = {
  codingLanguage: "TS",
  sourceControl: "Git",
  hasManyMeetings: true,
  reportsToBeCompleted: ["hourly", "weekly", "daily"],
};

type MeetingHolder = {
  meetingMaxLength: number;
  holdMeeting: () => void;
};

class ProjectManager implements MeetingHolder {
  meetingMaxLength = 60;
  holdMeeting = () => {
    console.log("Just holding a meeting");
  };
}

export {};
