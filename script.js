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

function disablebtn1(event) {
    q1a1.disabled = true;
    q1a2.disabled = true;
    q1a3.disabled = true;
}

function disablebtn2(event) {
    q2a1.disabled = true;
    q2a2.disabled = true;
    q2a3.disabled = true;
}

function disablebtn3(event) {
    q3a1.disabled = true;
    q3a2.disabled = true;
    q3a3.disabled = true;
}

function disablebtn4(event) {
    q4a1.disabled = true;
    q4a2.disabled = true;
    q4a3.disabled = true;
}

function disablebtn5(event) {
    q5a1.disabled = true;
    q5a2.disabled = true;
    q5a3.disabled = true;
}

function disablebtn6(event) {
    q6a1.disabled = true;
    q6a2.disabled = true;
    q6a3.disabled = true;
}

function disablebtn7(event) {
    q7a1.disabled = true;
    q7a2.disabled = true;
    q7a3.disabled = true;
}

function disablebtn8(event) {
    q8a1.disabled = true;
    q8a2.disabled = true;
    q8a3.disabled = true;
}

function disablebtn9(event) {
    q9a1.disabled = true;
    q9a2.disabled = true;
    q9a3.disabled = true;
}


q1a1.addEventListener("click", introvert);
q1a1.addEventListener("click", disablebtn1);

q1a2.addEventListener("click", ambivert);
q1a2.addEventListener("click", disablebtn1);

q1a3.addEventListener("click", extrovert);
q1a3.addEventListener("click", disablebtn1);


q2a1.addEventListener("click", introvert);
q2a1.addEventListener("click", disablebtn2);

q2a2.addEventListener("click", ambivert);
q2a2.addEventListener("click", disablebtn2);

q2a3.addEventListener("click", extrovert);
q2a3.addEventListener("click", disablebtn2);


q3a1.addEventListener("click", introvert);
q3a1.addEventListener("click", disablebtn3);

q3a2.addEventListener("click", ambivert);
q3a2.addEventListener("click", disablebtn3);

q3a3.addEventListener("click", extrovert);
q3a3.addEventListener("click", disablebtn3);


q4a1.addEventListener("click", introvert);
q4a1.addEventListener("click", disablebtn4);

q4a2.addEventListener("click", ambivert);
q4a2.addEventListener("click", disablebtn4);

q4a3.addEventListener("click", extrovert);
q4a3.addEventListener("click", disablebtn4);


q5a1.addEventListener("click", introvert);
q5a1.addEventListener("click", disablebtn5);

q5a2.addEventListener("click", ambivert);
q5a2.addEventListener("click", disablebtn5);

q5a3.addEventListener("click", extrovert);
q5a3.addEventListener("click", disablebtn5);


q6a1.addEventListener("click", introvert);
q6a1.addEventListener("click", disablebtn6);

q6a2.addEventListener("click", ambivert);
q6a2.addEventListener("click", disablebtn6);

q6a3.addEventListener("click", extrovert);
q6a3.addEventListener("click", disablebtn6);


q7a1.addEventListener("click", introvert);
q7a1.addEventListener("click", disablebtn7);

q7a2.addEventListener("click", ambivert);
q7a2.addEventListener("click", disablebtn7);

q7a3.addEventListener("click", extrovert);
q7a3.addEventListener("click", disablebtn7);


q8a1.addEventListener("click", introvert);
q8a1.addEventListener("click", disablebtn8);

q8a2.addEventListener("click", ambivert);
q8a2.addEventListener("click", disablebtn8);

q8a3.addEventListener("click", extrovert);
q8a3.addEventListener("click", disablebtn8);


q9a1.addEventListener("click", introvert);
q9a1.addEventListener("click", disablebtn9);

q9a2.addEventListener("click", ambivert);
q9a2.addEventListener("click", disablebtn9);

q9a3.addEventListener("click", extrovert);
q9a3.addEventListener("click", disablebtn9);





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



