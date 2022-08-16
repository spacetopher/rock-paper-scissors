// Randomly return 'Rock', 'Paper' or 'Scissors'
let computerSelection = getComputerChoice();
function getComputerChoice() {
const options = ["Rock", "Paper", "Scissors"];
const random = options[Math.floor(Math.random()*options.length)];
return random;
}
console.log(computerSelection);
// prompt for playerSelection
const playerInput = prompt("Let's play a game! Choose Rock, Paper or Scissors.");

let playerSelection = capitalizeFirstLetter();
// format playerSelection
function capitalizeFirstLetter() {
const up = playerInput.toUpperCase().charAt(0);
const low = playerInput.slice(1).toLowerCase();
const all = up + low;
return all;
}
console.log(playerSelection);

let winner;
let player;
let cpu;
let draw;

// Write a function that plays a single round of Rock Paper Scissors
function playRound() {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        winner = player;
        alert("You Win! Rock beats Scissors");
    }   else if (playerSelection === "Rock" && computerSelection === "Paper") {
        winner = cpu;
        alert("You Lose! Paper beats Rock");
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        winner = cpu;
        alert("You Lose! Scissors beats Paper");
    }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
        winner = player;
        alert("You Win! Paper beats Rock");
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        winner = cpu;
        alert("You Lose! Rock beats Scissors");
    }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        winner = player;
        alert("You Win! Scissors beats Paper");   
    }   else  {
        winner = draw;
        alert("It's a draw. Both opponents chose the same.");
    }
}
playRound(playerSelection, computerSelection);