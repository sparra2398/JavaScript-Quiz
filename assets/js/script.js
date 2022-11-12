var startButton = document.querySelector(".start");
var score = 0;
//starting time left at 61 because -- kicks in before element loads. timer will actually start counting from 60
var timeLeft = 61;
var timer = document.getElementById("timer")
var timeInterval;
//displays previous scores in local storage OR creates them, if first time playing game
var highScores = JSON.parse(localStorage.getItem("highScores"))||[]

//prevents timer from going below 0 and ends game when timer reaches 0
function clockTick(){
    timeLeft--
    timer.textContent = "Time: " + timeLeft
    if (
        timeLeft <= 0
    ){
        endGame()
    }
}

//all 5 questions + answers
var questions = [
    {
        text: "Commonly used data types DO Not include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        text: "The condition in an if/else statement is enclosed with ________.",
        choices: ["Quotes", "Curly Braces", "Parenthesis", "Square Brackets"],
        answer: "Parenthesis"
    },
    {
        text: "Arrays in JavaScript can be used to store ________.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        answer: "All of the above"
    },
    {
        text: "String values must be enclosed within ________ when being assigned to variables.",
        choices: ["Quotes", "Commas", "Curly Braces", "Parenthesis"],
        answer: "Quotes"
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"],
        answer: "Console.log"
    },
]

function startGame(){
//hides title page when game starts
document.getElementById("title-page").setAttribute("class", "hide")
//makes quiz questions pop up when title page goes away
document.getElementById("quiz-page").classList.remove("hide")
//timer countdown
timeInterval = setInterval(clockTick, 1000)

//starts quiz by showing first question and first set of answers
askQuestion()
}
var Q = 0
function askQuestion(){
//selects html element to display question
document.getElementById("button-box").innerHTML = ""
//uses text content to show question 1
document.getElementById("question-text").textContent = questions[Q].text;
//loops over choices and makes 1 button per choice
questions[Q].choices.forEach(function(choice, index){
    var button = document.createElement("button")
    button.textContent = index + 1 + ". " + choice;
    button.setAttribute("value", choice)
    //allows buttons to either be logged as the "right" or "wrong" answer 
    button.onclick = function(){
        if (this.value === questions[Q].answer){
            rightLogic()
        }
        else {
            wrongLogic()
        }
        //when out of questions, game ends
        Q++;
        if (Q === questions.length){
            endGame()
        } else {askQuestion()}
    }
    document.getElementById("button-box").append(button)
}) 
}

//augments score when answers are correct
function rightLogic(){
    score++ 
    console.log(score)
}

//docks 10 seconds off timer when answers are incorrect until timer = 0
function wrongLogic(){
    timeLeft -= 10
    console.log(timeLeft)
    if (
        timeLeft < 0
    ){
        timeLeft = 0
    }
}

//hides quiz questions when game is over and shows end page
function endGame(){
    document.getElementById("quiz-page").classList.add("hide")
    clearInterval(timeInterval)
    document.getElementById("end-page").classList.remove("hide")
}

//calculates scores and saves them into local storage, along with inputed player initials
function saveScore(){
    var initials = document.getElementById("initials").value
    var totalScore = score * timeLeft 
    var scoreObjects = {initials, totalScore}
    highScores.push(scoreObjects)
    localStorage.setItem("highScores", JSON.stringify(highScores))
}

//save button for scores
document.getElementById("save-btn").addEventListener("click", saveScore)

//start button
startButton.addEventListener("click", startGame)