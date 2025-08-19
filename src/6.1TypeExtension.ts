type SimpleJob = {
  codingLanguage: string;
  sourceControl: string;
};

type ComplicatedJob = SimpleJob & {
  //Type intersection
  hasMaanyMeetings: true;
  reportsToBeCompleted: string[];
};

let complicatedJob: ComplicatedJob = {
  codingLanguage: "TS",
  sourceControl: "git",
  hasMaanyMeetings: true,
  reportsToBeCompleted: ["hourly", "daily", "weekly"],
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
