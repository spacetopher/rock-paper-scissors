let playerScore = 0;
let computerScore = 0;
alert("Let's play a game of Rock, Paper, Scissors!");

// Randomly return 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
const options = ["Rock", "Paper", "Scissors"];
const randomNumber = Math.floor(Math.random() * 3);
return options[randomNumber];
}

// format playerSelection
function capitalizeFirstLetter() {
const playerInput = prompt("Choose Rock, Paper or Scissors.");
const up = playerInput.toUpperCase().charAt(0);
const low = playerInput.slice(1).toLowerCase();
const all = up + low;
return all;
}

// Write a function that plays a single round of Rock Paper Scissors
function playRound() {
    const playerSelection = capitalizeFirstLetter();
    const computerSelection = getComputerChoice();
    if  (playerSelection === computerSelection) {
        alert("It's a draw.");
        winner = "draw";
        return winner; 
    }   else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        alert("Round won! " + playerSelection + " beats " + computerSelection);
        winner = "player";
        return winner; 
    }   else if (playerSelection === "Rock" && computerSelection === "Paper") {
        alert("Round lost. " + playerSelection + " loses to " + computerSelection);
        winner = "cpu";
        return winner; 
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        alert("Round lost. " + playerSelection + " loses to " + computerSelection);
        winner = "cpu";
        return winner; 
    }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
        alert("Round won! " + playerSelection + " beats " + computerSelection);
        winner = "player";
        return winner; 
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        alert("Round lost. " + playerSelection + " loses to " + computerSelection);
        winner = "cpu";
        return winner; 
    }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        alert("Round won! " + playerSelection + " beats " + computerSelection);  
        winner = "player";
        return winner; 
    }   
}
// Call playRound() inside to play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        if (winner === "player") {
            playerScore += 1;
        } else if (winner === "cpu") {
            computerScore += 1;
        }
        console.log(playerScore, computerScore);
}
return score(playerScore, computerScore);
}

// Functiont that keeps track of score and declares a winner
function score() {
    if (playerScore > computerScore) {
        return alert("You win the game!");
    } else if (playerScore < computerScore) {
        return alert("The computer wins the game.");
    } else {
        return alert("No one wins the game.");
    }
}

game();
