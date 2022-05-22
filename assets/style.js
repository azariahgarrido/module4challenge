// var questions = [
//     {
//         question : "What color are Darth Vader's eyes?",
//         choiceA : "Blue",
//         choiceB : "Red",
//         choiceC : "Black",
//         choiceD : "Green",
//         correct : "B",
//     },
//     {
//         question : "What is Sponge's last name?",
//         choiceA : "Bob",
//         choiceB : "Robert",
//         choiceC : "Squarepants",
//         choiceD : "Juan",
//         correct : "C",
//     }
// ]

var buttonEl = document.getElementById("button");
var quizEl = document.getElementById("quiz");
var startSec = document.getElementById("start");
var timeEl = document.getElementById("time");

var QoneAoneB = document.getElementById("QoneAone");
var QoneAtwoB = document.getElementById("QoneAtwo");
var QoneAthreeB = document.getElementById("QoneAtwo");
var QoneAthreeB = document.getElementById("QoneAthree");
var QoneAfourB = document.getElementById("QoneAfour");

var QtwoAoneB = document.getElementById("QtwoAone");
var QtwoAtwoB = document.getElementById("QtwoAtwo");
var QtwoAthreeB = document.getElementById("QtwoAthree");
var QtwoAfourB = document.getElementById("QtwoAfour");

var QthreeAoneB = document.getElementById("QthreeAone");
var QthreeAtwoB = document.getElementById("QthreeAtwo");
var QthreeAthreeB = document.getElementById("QthreeAthree");
var QthreeAfourB = document.getElementById("QthreeAfour");

var complete = document.getElementById("final");

var quizTwoEl = document.getElementById("quizTwo");
var quizThreeEl = document.getElementById("quizThree");
var assess = document.getElementById("assessment");
var dead = document.getElementById("died");
var secondsLeft = 60;
var correct = 0;
var incorrect = 0;


buttonEl.addEventListener("click", function(){
    startSec.style.display = "none";
    quizEl.style.display = "block";
    setTime();
})

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
      if(secondsLeft === 0){
        clearInterval(timerInterval);
        alert ("GAME OVER");
      }
    }, 1000);
}


QoneAoneB.addEventListener("click", function showAlert(){
    alert ("Ha! Incorrect");
    incorrect = ++incorrect;
    secondsLeft = secondsLeft - 10;
    localStorage.setItem("incorrect", incorrect);
})

QoneAtwoB.addEventListener("click", function showAlert(){
    alert ("Ha! Incorrect");
    incorrect = ++incorrect;
    secondsLeft = secondsLeft - 10;
    localStorage.setItem("incorrect", incorrect);
})

QoneAthreeB.addEventListener("click", function(){
    correct = ++correct;
    quizEl.style.display = "none";
    quizTwoEl.style.display = "block";
    localStorage.setItem("correct", correct);
})

QoneAfourB.addEventListener("click", function showAlert(){
    alert ("Ha! Incorrect");
    incorrect = ++incorrect;
    secondsLeft = secondsLeft - 10;
    localStorage.setItem("incorrect", incorrect);
})


QtwoAoneB.addEventListener("click", function(){
    correct = ++correct;
    quizTwoEl.style.display = "none";
    quizThreeEl.style.display = "block";
    localStorage.setItem("correct", correct);
})

QtwoAtwoB.addEventListener("click", function showAlert(){
    alert ("Ha! Incorrect");
    incorrect = ++incorrect;
    secondsLeft = secondsLeft - 10;
    localStorage.setItem("incorrect", incorrect);
})

QtwoAthreeB.addEventListener("click", function showAlert(){
    alert ("Ha! Incorrect");
    incorrect = ++incorrect;
    secondsLeft = secondsLeft - 10;
    localStorage.setItem("incorrect", incorrect);
})

QtwoAfourB.addEventListener("click", function showAlert(){
    alert ("Ha! Incorrect");
    incorrect = ++incorrect;
    secondsLeft = secondsLeft - 10;
    localStorage.setItem("incorrect", incorrect);
})

QthreeAoneB.addEventListener("click", function showAlert(){
    alert ("Ha! Incorrect");
    incorrect = ++incorrect;
    secondsLeft = secondsLeft - 10;
    localStorage.setItem("incorrect", incorrect);
})

QthreeAtwoB.addEventListener("click", function showAlert(){
    alert ("Ha! Incorrect");
    incorrect = ++incorrect;
    secondsLeft = secondsLeft - 10;
    localStorage.setItem("incorrect", incorrect);
})

QthreeAthreeB.addEventListener("click", function showAlert(){
    alert ("Ha! Incorrect");
    incorrect = ++incorrect;
    secondsLeft = secondsLeft - 10;
    localStorage.setItem("incorrect", incorrect);
})

QthreeAfourB.addEventListener("click", function(){
    correct = ++correct;
    localStorage.setItem("correct", correct);
    quizThreeEl.style.display = "none";
    complete.textContent = "Finished! Your score is: " + correct + " correct, " + incorrect + " incorrect.";
    complete.style.display = "block";
})