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

const searchQuery2: SearchEventOptions = {
  query: 2,
  eventType: "groups"
};
/*
Should return:
Improvional arts lab
*/
const searchResults1 = searchEvent(searchQuery);
console.log(searchResults1);

/*
Should return:
Research methods one study group 
*/

const searchResults2 = searchEvent(searchQuery2);

console.log(searchResults2);

const searchQuery3: SearchEventOptions = {
  query: "art",
  eventType: "courses"
};
const searchResults3 = searchEvent(searchQuery3);
console.log(searchResults3);
const searchQuery4: SearchEventOptions = {
  query: "research",
  eventType: "groups"
};
const searchResults4 = searchEvent(searchQuery4);
console.log(searchResults4);

type enrolledEvents = (Course | StudyGroup)[];
let enrolledEvents: enrolledEvents = [];
function enroll(event: Course | StudyGroup): void {
  enrolledEvents.push(event);
}

/*
Should be able to enroll a searched event
*/

enroll(searchEvent(searchQuery)[0]);
console.debug("Enrolled Events", enrolledEvents);
