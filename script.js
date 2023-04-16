let player = 0;
let computerScore = 0;

let instructions = document.querySelector("#instructions");
let playerScoreMarker = document.querySelector("#player-score");
let computerScoreMarker = document.querySelector("#computer-score");
let message = document.querySelector("#message");
let winPoint = document.querySelector("#win-point")

let playerChoice = document.querySelector("#player-choice");
let computerChoice = document.querySelector("#computer-choice");

let options = document.querySelectorAll(".option");
options.forEach(button =>{
    button.addEventListener("click",startTurn);
});

function startTurn(e){
    let computerOption = Math.floor(Math.random() * 3 + 1);
    console.log(computerOption);
}