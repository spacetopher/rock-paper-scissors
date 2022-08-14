// Randomly return 'Rock', 'Paper' or 'Scissors'
getComputerChoice();

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const computerSelection = options[Math.floor(Math.random()*options.length)]
    console.log(computerSelection);
}

// prompt for playerSelection
let playerInput = prompt("Let's play a game! Choose Rock, Paper or Scissors.");
let playerSelection = capitalizeFirstLetter(playerInput);

function capitalizeFirstLetter(playerInput) {
    const up = playerInput.toUpperCase().charAt(0);
    const low = playerInput.slice(1).toLowerCase();
    let playerSelection = up + low;
    return playerSelection;
}

let winner;
let player;
let cpu;

// Write a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        winner = player;
        alert("It's a draw. Both opponents chose the same.");
    }
        else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        winner = player;
        alert("You Win! playerSelection beats computerSelection");
    }
        else if (playerSelection === "Rock" && computerSelection === "Paper") {
        winner = cpu;
        alert("You Lose! computerSelection beats playerSelection");
    }
        else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        winner = cpu;
        alert("You Lose! computerSelection beats playerSelection");
    }
        else if (playerSelection === "Paper" && computerSelection === "Rock") {
        winner = player;
        alert("You Win! playerSelection beats computerSelection");
    }
        else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        winner = cpu;
        alert("You Lose! computerSelection beats playerSelection");
    }
        else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        winner = player;
        alert("You Win! playerSelection beats computerSelection");
    }
}

