let playerScore = 0;
let computerScore = 0;

let instructions = document.querySelector("#instructions");
let playerScoreMarker = document.querySelector("#player-score");
let computerScoreMarker = document.querySelector("#computer-score");
let message = document.querySelector("#message");
let youWonLost = document.querySelector("#you-won-lost");

let playerChoice = document.querySelector("#player-choice");
let computerChoice = document.querySelector("#computer-choice");

let options = document.querySelectorAll(".option");
options.forEach((button) => {
  button.addEventListener("click", startTurn);
});

function startTurn(e) {
  let computerOption = Math.floor(Math.random() * 3 + 1);
  let playerOption = e.currentTarget.id;
  // console.log("Player choice: " + playerOption);

  if (computerOption === 1) {
    computerOption = "rock🪨";
  } else if (computerOption === 2) {
    computerOption = "paper🧻";
  } else if (computerOption === 3) {
    computerOption = "scissors✂️";
  }
  // console.log("Computer choice: " + computerOption);

  /* 
    Si un jugador elige piedra y el otro jugador elige tijera, la piedra gana.
    Si un jugador elige tijera y el otro jugador elige papel, las tijeras ganan.
    Si un jugador elige papel y el otro jugador elige piedra, el papel gana.
    */

    if(
        (playerOption === "rock🪨" && computerOption === "scissors✂️") ||
        (playerOption === "paper🧻" && computerOption === "rock🪨") ||
        (playerOption === "scissors✂️" && computerOption === "paper🧻")
    ){
        playerWins();
    }else if(
        (computerOption === "rock🪨" && playerOption === "scissors✂️") ||
        (computerOption === "paper🧻" && playerOption === "rock🪨") ||
        (computerOption === "scissors✂️" && playerOption === "paper🧻")
    ){
        computerWins();
    }
    else{
        tie();
    }
}

function playerWins(){
    playerScore++;
    playerScoreMarker.innerText = playerScore;
    youWonLost.innerHTML = "You won a point! 🔥";
}

function computerWins(){
    computerScore++;
    computerScoreMarker.innerText = computerScore;
    youWonLost.innerHTML = "The computer won a point! 😭"
}

function tie(){
    youWonLost.innerHTML = "It's a tie! 🙉";
}