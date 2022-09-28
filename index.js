const readlineSync = require("readline-sync");
var userName;
console.log(
  "welcome to the game \nThis is a quiz on basics of web development. \nIt has five questions and has four options each. \nFor every correct answer, your score increments by one point and there is no negative marking.\nAfter submission, your score out of 5 will be displayed on the screen."
);
function nameFun() {
  userName = readlineSync.question("Enter your name :");
}

nameFun();

if (userName === "") {
  alert("Please enter your name to proceed.");
  nameFun();
}

const answers = [
  "Hyper Text Markup Language",
  "Cascading Style Sheet",
  "Inside the head section",
  "Text-align:center;",
  "True",
];

const questionOne = readlineSync.question(
  "1. What does HTML stand for? \n A. Hyper Tag Markup Language \n B. Hyper Text Markup Language \n C. Hyperlinks Text Mark Language \n D. Hyperlinking Text Marking Language \n"
);

const questionTwo = readlineSync.question(
  "2. What does CSS stand for? \n A. Computing Style Sheet \n B. Creative Style System \n C. Cascading Style Sheet \n D. Creative Styling Sheet \n"
);

const questionThree = readlineSync.question(
  "3. Where should a CSS file be referenced in a HTML file? \n A. Before any HTML code \n B. After all HTML code \n C. Inside the head section \n D. Inside the body section \n"
);

const questionFour = readlineSync.question(
  "4. What is the correct format for aligning written content to the center of the page in CSS? \n A. Text-align:center; \n B. Font-align:center; \n C. Text:align-center; \n D. Font:align-center; \n"
);

const questionFive = readlineSync.question(
  "5. Can styles be included in a html file?  \n A. True \n D. False \n"
);

const userAnswers = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
];

let score = 0;
for (let i = 0; i < userAnswers.length; i++) {
  if (userAnswers[i].toLowerCase() === answers[i].toLowerCase()) {
    score++;
  } else {
    score;
  }
}

console.log(
  `Hi ${userName}, you scored ${score}/5. \nCorrect Answers: Hyper Text Markup Language, Cascading Style Sheet, Inside the head section, Text-align:center;, True \nYour Answers: ${questionOne},${questionTwo},${questionThree},${questionFour},${questionFive} `
);
