import courses from "./courses";
import studyGroups from "./studyGroup";

type StudyGroup = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type Course = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};
type SearchEventOptions = {
  query: string | number;
  eventType: "courses" | "groups";
};
function searchEvent(options: SearchEventOptions) {
  let events: (StudyGroup | Course)[];
  if (options.eventType === "courses") {
    events = courses;
  } else {
    events = studyGroups;
  }

  return events.filter((event) => {
    if (typeof options.query === "number") {
      return event.id === options.query;
    } else if (typeof options.query === "string") {
      return event.keywords.includes(options.query);
    }
  });
}

const searchQuery: SearchEventOptions = {
  query: 1,
  eventType: "courses"
};

const searchQuery2 = {
  query: 1,
  eventType: "groups"
};
/*
Should return:
Improvional arts lab
*/
const searchResults1 = searchEvent(searchQuery);
console.log(searchResults1);
