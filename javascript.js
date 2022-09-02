// Randomly return 'Rock', 'Paper' or 'Scissors'
let computerSelection = getComputerChoice();
function getComputerChoice() {
const options = ["Rock", "Paper", "Scissors"];
const random = options[Math.floor(Math.random()*options.length)];
return random;
}

// prompt for playerSelection
function inputPrompt() {
const input = prompt("Let's play a game! Choose Rock, Paper or Scissors.");
return input;
}

const playerInput = inputPrompt(); 

let playerSelection = capitalizeFirstLetter();
// format playerSelection
function capitalizeFirstLetter() {
const up = playerInput.toUpperCase().charAt(0);
const low = playerInput.slice(1).toLowerCase();
const all = up + low;
return all;
}

let winner;


// Write a function that plays a single round of Rock Paper Scissors

function playRound() {
    if  (playerSelection === computerSelection) {
        alert("It's a draw.");
        winner = "draw";
        return console.log(winner); 
    }   else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        alert("Round won! " + playerSelection + " beats " + computerSelection);
        winner = "player";
        return console.log(winner); 
    }   else if (playerSelection === "Rock" && computerSelection === "Paper") {
        alert("Round lost. " + playerSelection + " loses to " + computerSelection);
        winner = "cpu";
        return console.log(winner); 
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        alert("Round lost. " + playerSelection + " loses to " + computerSelection);
        winner = "cpu";
        return console.log(winner); 
    }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
        alert("Round won! " + playerSelection + " beats " + computerSelection);
        winner = "player";
        return console.log(winner); 
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        alert("Round lost. " + playerSelection + " loses to " + computerSelection);
        winner = "cpu";
        return console.log(winner); 
    }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        alert("Round won! " + playerSelection + " beats " + computerSelection);  
        winner = "player";
        return console.log(winner); 
    }   
}

// Call playRound() inside to play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
}
}
game();