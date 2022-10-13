//when we click the button, hide title page
// --/create a variable and set it to the start button's class name
// --/add event listener to start button
var startButton = document.querySelector(".start");
console.log(startButton)
var questions = [
    {
        text: "Commonly used data types DO Not include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "2"
    },
    {
        text: "The condition in an if/else statement is enclosed with ________.",
        choices: ["Quotes", "Curly Braces", "Parenthesis", "Square Brackets"],
        answer: "2"
    },
    {
        text: "Arrays in JavaScript can be used to store ________.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        answer: "3"
    },
    {
        text: "String values must be enclosed within ________ when being assigned to variables.",
        choices: ["Quotes", "Commas", "Curly Braces", "Parenthesis"],
        answer: "0"
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"],
        answer: "3"
    },
]
function startGame(){
// --/use set attribute to add hide class to title page 
document.getElementById("title-page").setAttribute("class", "hide")
// --/use remove attribute to remove hide class from quiz page
document.getElementById("quiz-page").classList.remove("hide")
askQuestion()
}

function askQuestion(){
//start quiz by showing first question and first set of answers
// --/select html element to display question
// --/use text content to show question 1
// --/loop over choices and make 1 button per choice
document.getElementById("question-text").textContent = questions[0].text;
questions[0].choices.forEach(function(choice, index){
    console.log(choice, index)
    var button = document.createElement("button")
    button.textContent = index + 1 + ". " + choice;
    button.setAttribute("value", choice)
    button.onclick = function(){
        console.log(this.value)
    }
    document.getElementById("button-box").append(button)
}) 
}
startButton.addEventListener("click", startGame)