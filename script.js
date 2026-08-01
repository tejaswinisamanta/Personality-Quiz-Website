/*Add your JavaScript here*/

var introvertScore = 0;
var extrovertScore = 0;
var ambivertScore = 0;

var questionCount = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q8a3 = document.getElementById("q8a3");

var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");
var q9a3 = document.getElementById("q9a3");


q1a1.addEventListener("click", introvert);
q1a2.addEventListener("click", ambivert);
q1a3.addEventListener("click", extrovert);

q2a1.addEventListener("click", introvert);
q2a2.addEventListener("click", ambivert);
q2a3.addEventListener("click", extrovert);

q3a1.addEventListener("click", introvert);
q3a2.addEventListener("click", ambivert);
q3a3.addEventListener("click", extrovert);

q4a1.addEventListener("click", introvert);
q4a2.addEventListener("click", ambivert);
q4a3.addEventListener("click", extrovert);

q5a1.addEventListener("click", introvert);
q5a2.addEventListener("click", ambivert);
q5a3.addEventListener("click", extrovert);

q6a1.addEventListener("click", introvert);
q6a2.addEventListener("click", ambivert);
q6a3.addEventListener("click", extrovert);

q7a1.addEventListener("click", introvert);
q7a2.addEventListener("click", ambivert);
q7a3.addEventListener("click", extrovert);

q8a1.addEventListener("click", introvert);
q8a2.addEventListener("click", ambivert);
q8a3.addEventListener("click", extrovert);

q9a1.addEventListener("click", introvert);
q9a2.addEventListener("click", ambivert);
q9a3.addEventListener("click", extrovert);


var show = document.getElementById("show");
function updateResult() {
  if (introvertScore > extrovertScore && introvertScore > ambivertScore) {
    console.log("You are an introvert!");
    show.innerHTML = "You are an introvert!";
  } else if (extrovertScore > introvertScore && extrovertScore > ambivertScore) {
    console.log("You are an extrovert!");
    show.innerHTML = "You are an extrovert!";
  } else if (ambivertScore > extrovertScore && ambivertScore > introvertScore) {
    console.log("You are an ambivert!");
    show.innerHTML = "You are an ambivert!";
  } else {
    console.log("Please complete the quiz.");
    show.innerHTML = "Please complete the quiz.";

  }
}


function introvert() {
  introvertScore += 1;
  questionCount += 1;

  console.log("introvertScore = " + introvertScore + " questionCount = " + questionCount);

  if (questionCount == 10) {
    console.log("The quiz is done!");
  }
  
}

function ambivert() {
  ambivertScore += 1;
  questionCount += 1;

  console.log("ambivertScore = " + ambivertScore + " questionCount = " + questionCount);

  if (questionCount == 10) {
    console.log("The quiz is done!");
  }
  
}

function extrovert() {
  extrovertScore += 1;
  questionCount += 1;

  console.log("extrovertScore = " + extrovertScore + " questionCount = " + questionCount);

  if (questionCount == 10) {
    console.log("The quiz is done!");
  }
  
}

var result = document.getElementById("result");
result.addEventListener("click", updateResult);

function getResult() {
  console.log("Restart");
  show.innerHTML = "Your result is ...";
  
}

var restart = document.getElementById("restart");
restart.addEventListener("click", getResult);



