let playerScore = 0;
let computerScore = 0;

let instructions = document.querySelector("#instructions");
let playerScoreMarker = document.querySelector("#player-score");
let computerScoreMarker = document.querySelector("#computer-score");
let message = document.querySelector("#message");
let youWonLost = document.querySelector("#you-won-lost");
let chooseOption = document.querySelector("#choose-option");
let btnRestart = document.querySelector("#btn-restart");

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

    showMessage(playerOption, computerOption);

    if(playerScore === 5 || computerScore === 5){

        chooseOption.classList.add("disabled");
        btnRestart.classList.remove("disabled");
        btnRestart.addEventListener("click", restartGame);

        if(playerScore === 5){
            instructions.innerHTML = "🔥 YOU WON THE GAME! 🔥"
        }
        else if(computerScore === 5){
            instructions.innerHTML = "😭 THE COMPUTER WON THE GAME! 😭"
        }
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

function showMessage(par1, par2){
    message.classList.remove("disabled");
    playerChoice.innerHTML = par1;
    computerChoice.innerHTML = par2;
}

function restartGame(){
    btnRestart.classList.add("disabled");
    chooseOption.classList.remove("disabled");
    message.classList.add("disabled");

    playerScore = 0;
    computerScore = 0;
    playerScoreMarker.innerHTML = playerScore;
    computerScoreMarker.innerHTML = computerScore;

    instructions.innerHTML = "The first to reach 5 points wins";
}