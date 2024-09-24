const choices = ["rock", "paper", "scissors"]

const resetButton = document.getElementById("reset").addEventListener('click', () => resetScore());

const rockButton = document.getElementById("rock").addEventListener('click', () => clickToPlay("rock"));
const paperButton = document.getElementById("paper").addEventListener('click', () => clickToPlay("paper"));
const scissorsButton = document.getElementById("scissors").addEventListener('click', () => clickToPlay("scissors"));

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore")
const tieScoreDisplay = document.getElementById("tieScore")


let playerCount = 0;
let computerCount = 0;
let tieCount = 0;

function clickToPlay(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
  
    if (playerChoice === computerChoice) {
        result = "TIE";
    } else if (computerChoice === "rock" && playerChoice === "paper" ) {
        result = "YOU WIN";
    } else if (computerChoice === "rock" && playerChoice === "scissors" ) {
        result = "YOU LOSE";
    } else if (computerChoice === "paper" && playerChoice === "scissors" ) {
        result = "YOU WIN";
    } else if (computerChoice === "paper" && playerChoice === "rock" ) {
        result = "YOU LOSE";
    } else if (computerChoice === "scissors" && playerChoice === "rock" ) {
        result = "YOU WIN";
    } else if (computerChoice === "scissors" && playerChoice === "paper" ) 
        result = "YOU LOSE";
    
    resultDisplay.textContent = `Result: ${result}`
    computerDisplay.textContent = `Computer: ${computerChoice}`
    playerDisplay.textContent = `Player: ${playerChoice}`

    if (result === "YOU WIN") {
        playerCount++;
        playerScoreDisplay.textContent = `WIN: ${playerCount}`
    } else if (result === "YOU LOSE") {
        computerCount++;
        computerScoreDisplay.textContent = `LOSE: ${computerCount}`;
    } else if ( result === "TIE") 
        tieCount++;
        tieScoreDisplay.textContent = `TIE: ${tieCount}`


}


function resetScore() {
    resultDisplay.textContent = "";
    computerDisplay.textContent = "";
    playerDisplay.textContent = "";

    playerCount = '';
    computerCount = '';
    tieCount = '';

    tieScoreDisplay.textContent = tieCount;
    computerScoreDisplay.textContent = computerCount;
    playerScoreDisplay.textContent = playerCount;
    

}