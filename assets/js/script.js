//when we click the button, hide title page
// --/create a variable and set it to the start button's class name
// --/add event listener to start button
var startButton = document.querySelector(".start");
console.log(startButton)
var questions = [
    {
        text: "Question one",
        choices: ["html", "css", "js", "english"],
        answer: "2"
    },
    {
        text: "Question two",
        choices: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        text: "Question three",
        choices: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        text: "Question four",
        choices: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        text: "Question five",
        choices: ["1", "2", "3", "4"],
        answer: "2"
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