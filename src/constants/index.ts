import { Topic } from "src/types.ts";
import {
  yourselfContent,
  strengthContent,
  weaknessContent,
  jobMarketContent,
  whyHireYouContent,
  whyCompanyContent,
  differentContent,
  aboutProductContent,
  workingWithPMContent,
  engineeringProductContent,
  leadershipStyleContent,
  leadershipExampleContent,
  coworkersSayContent,
  questionsCompanyContent,
  questionsRoleContent,
  questionsOtherContent,
  nextStageContent,
  eCommerceMigrationContent,
  fiveYearsContent,
  mostProudContent,
  conflictingPrioritiesContent,
  learnQuickContent,
  exceedExpectationsContent,
  customerFeedbackContent,
  difficultPersonContent,
  disagreedContent,
  failureContent,
  pressureContent,
  challengingProjectContent,
  persuadeSomeoneContent,
  successOnTeamContent,
  asyncAwaitContent,
  promisesContent,
  virtualDOMContent,
  domManipulationContent,
  es6Content,
  eventBubblingContent,
  eventDelegationContent,
  testingPyramidContent,
  prototypesContent,
  functionalProgrammingContent,
} from "./contents";

export const currentCompany: string = "ACME";
export const sections: string[] = [
  currentCompany,
  "general",
  "specialized",
  "technical",
  "projects",
  "questions",
];

export const topics: Topic[] = [
  {
    section: currentCompany,
    name: "yourself",
    displayName: "about yourself",
    heading: "Tell me about yourself",
    contents: yourselfContent,
  },
  {
    section: "general",
    name: "strength",
    displayName: "your main strength",
    heading: "What is your main strength",
    contents: strengthContent,
  },
  {
    section: "general",
    name: "weakness",
    displayName: "your main weakness",
    heading: "What is your main weakness",
    contents: weaknessContent,
  },
  {
    section: "general",
    name: "successOnTeam",
    displayName: "success on a team",
    heading: "Tell me about a time you were successful on a team",
    contents: successOnTeamContent,
  },
  {
    section: "general",
    name: "challengingProject",
    displayName: "most challenging project",
    heading: "Describe your most challenging project",
    contents: challengingProjectContent,
  },
  {
    section: "general",
    name: "jobMarket",
    displayName: "what brings you to the job market",
    heading: "What brings you to the job market",
    contents: jobMarketContent,
  },
  {
    section: "general",
    name: "fiveYears",
    displayName: "yourself in 5 years",
    heading: "Where do you see yourself in 5 years",
    contents: fiveYearsContent,
  },
  {
    section: "general",
    name: "mostProd",
    displayName: "main accomplishment",
    heading:
      "Tell me about something you've accomplished that you are proud of",
    contents: mostProudContent,
  },
  {
    section: "general",
    name: "failure",
    displayName: "fail or mistake",
    heading: "Tell me about a time you failed or made a mistake",
    contents: failureContent,
  },
  {
    section: "general",
    name: "difficultPerson",
    displayName: "difficult person",
    heading: "Tell me about a time you worked with a difficult person",
    contents: difficultPersonContent,
  },
  {
    section: "general",
    name: "disagreed",
    displayName: "disagreed with someone",
    heading: "Tell me about a time you disagreed with someone",
    contents: disagreedContent,
  },
  {
    section: "general",
    name: "pressure",
    displayName: "handle pressure",
    heading: "How do you handle pressure",
    contents: pressureContent,
  },
  {
    section: "technical",
    name: "testingPyramid",
    displayName: "testing pyramid",
    heading: "Describe the different types of tests in the testing pyramid",
    contents: testingPyramidContent,
  },
  {
    section: "general",
    name: "learnQuick",
    displayName: "learn something quickly",
    heading: "Tell me about a time you had to learn something quickly",
    contents: learnQuickContent,
  },
  {
    section: "technical",
    name: "eventBubbling",
    displayName: "event bubbling",
    heading: "What is event bubbling in JavaScript",
    contents: eventBubblingContent,
  },
  {
    section: "technical",
    name: "eventDelegation",
    displayName: "event delegation",
    heading: "What is event delegation in JavaScript",
    contents: eventDelegationContent,
  },
  {
    section: "general",
    name: "exceedExpectations",
    displayName: "surpassed expectations",
    heading: "Tell me about a time you surpassed people's expectations",
    contents: exceedExpectationsContent,
  },
  {
    section: "general",
    name: "conflictingPriorities",
    displayName: "conflicting priorities",
    heading: "Tell me about a time you had to manage conflicting priorities",
    contents: conflictingPrioritiesContent,
  },
  {
    section: "general",
    name: "persuadeSomeone",
    displayName: "persuade someone",
    heading: "Tell me about a time you had to persuade someone",
    contents: persuadeSomeoneContent,
  },
  {
    section: currentCompany,
    name: "nextStage",
    displayName: "next stage of your career",
    heading: "What's important to you in the next stage of your career",
    contents: nextStageContent,
  },
  {
    section: "projects",
    name: "eCommerceMigration",
    displayName: "e-commerce Migration",
    heading: "E-commerce Platform Migration",
    contents: eCommerceMigrationContent,
  },
  {
    section: "projects",
    name: "customerFeedback",
    displayName: "customer Feedback",
    heading: "Customer Feedback System",
    contents: customerFeedbackContent,
  },
  {
    section: currentCompany,
    name: "whyCompany",
    displayName: "why ACME",
    heading: "Why do you want to work for ACME",
    contents: whyCompanyContent,
  },
  {
    section: currentCompany,
    name: "whyHireYou",
    displayName: "why should I hire you",
    heading: "Why should I hire you",
    contents: whyHireYouContent,
  },
  {
    section: currentCompany,
    name: "different",
    displayName: "what makes you different",
    heading:
      "What makes you different or standout from the rest of the candidates",
    contents: differentContent,
  },
  {
    section: "technical",
    name: "promises",
    displayName: "Promises in javascript",
    heading: "What are Promises in JavaScript",
    contents: promisesContent,
  },
  {
    section: "technical",
    name: "asyncAwait",
    displayName: "async / await",
    heading: "Explain async/await in JavaScript",
    contents: asyncAwaitContent,
  },
  {
    section: "specialized",
    name: "aboutProduct",
    displayName: "about product",
    heading: "What do you think about supporting an application in production",
    contents: aboutProductContent,
  },
  {
    section: "technical",
    name: "virtualDOM",
    displayName: "DOM vs virtual DOM",
    heading: "What is the difference between the DOM and virtual DOM",
    contents: virtualDOMContent,
  },
  {
    section: "specialized",
    name: "workingWithPM",
    displayName: "working with product managers",
    heading: "How have you worked with product managers in past roles",
    contents: workingWithPMContent,
  },
  {
    section: "specialized",
    name: "engineeringProduct",
    displayName: "engineering product collaboration",
    heading: "What do you think engineering and product should collaborate",
    contents: engineeringProductContent,
  },
  {
    section: "general",
    name: "leadershipStyle",
    displayName: "leadership style",
    heading: "Describe your leadership style",
    contents: leadershipStyleContent,
  },
  {
    section: "general",
    name: "leadershipExample",
    displayName: "showing leadership",
    heading: "Tell me about a time you showed leadership",
    contents: leadershipExampleContent,
  },
  {
    section: "general",
    name: "coworkersSay",
    displayName: "others about you",
    heading: "What do your colleagues say about you",
    contents: coworkersSayContent,
  },
  {
    section: "questions",
    name: "questionsCompany",
    displayName: "about company",
    heading: "Questions about the company",
    contents: questionsCompanyContent,
  },
  {
    section: "questions",
    name: "questionsRole",
    displayName: "about role",
    heading: "Questions about the role",
    contents: questionsRoleContent,
  },
  {
    section: "questions",
    name: "questionsOther",
    displayName: "other questions",
    heading: "Miscellaneous questions",
    contents: questionsOtherContent,
  },
  {
    section: "technical",
    name: "domManipulation",
    displayName: "DOM Manipulation",
    heading: "Elaborate on DOM Manipulation",
    contents: domManipulationContent,
  },
  {
    section: "technical",
    name: "prototypes",
    displayName: "prototypes in javascript",
    heading: "What are Prototypes and prototypal inheritance in JavaScript",
    contents: prototypesContent,
  },
  {
    section: "technical",
    name: "ES6",
    displayName: "ES6 features",
    heading: "Can you mention some of the new ES6 features",
    contents: es6Content,
  },
  {
    section: "technical",
    name: "functionalProgramming",
    displayName: "functional programming",
    heading: "What is functional programming",
    contents: functionalProgrammingContent,
  },
];