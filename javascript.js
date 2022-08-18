// Randomly return 'Rock', 'Paper' or 'Scissors'
let computerSelection = getComputerChoice();
function getComputerChoice() {
const options = ["Rock", "Paper", "Scissors"];
const random = options[Math.floor(Math.random()*options.length)];
return random;
}
console.log(computerSelection);


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

// check for valid input
function inputCheck() {
    console.log(playerSelection);
    if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
    alert("Invalid selection");
    inputPrompt();
    }
}

let player;
let cpu;
let winner;
let draw;

// Write a function that plays a single round of Rock Paper Scissors
function playRound() {
    if  (playerSelection === computerSelection) {
        winner = draw;
        alert("It's a draw.");
    }   else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        winner = player;
        alert("Round won! " + playerSelection + " beats " + computerSelection);
    }   else if (playerSelection === "Rock" && computerSelection === "Paper") {
        winner = cpu;
        alert("Round lost. " + playerSelection + " loses to " + computerSelection);
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        winner = cpu;
        alert("Round lost. " + playerSelection + " loses to " + computerSelection);
    }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
        winner = player;
        alert("Round won! " + playerSelection + " beats " + computerSelection);
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        winner = cpu;
        alert("Round lost. " + playerSelection + " loses to " + computerSelection);
    }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        winner = player;
        alert("Round won! " + playerSelection + " beats " + computerSelection);   
    }   
}

// Call playRound() inside to play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    for (let i = playRound(playerSelection, computerSelection); i < 5; i++) {
        ;
    }
}
game();