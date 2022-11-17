const results = document.querySelector('#results');
const fillResults = document.createElement('div');
results.appendChild(fillResults);

const round = document.querySelector('#round');
const fillRound = document.createElement('div');
round.appendChild(fillRound);


const fillPlayerChoice = document.querySelector('#fillPlayerChoice');
const fillComputerChoice = document.querySelector('#fillComputerChoice');

const scoreBoard = document.querySelector('#scoreboard');
const fillPlayerScore = document.querySelector('#fillPlayerScore');
const fillComputerScore = document.querySelector('#fillComputerScore');

const restart = document.querySelector('#restart');
const fillRestart = document.createElement('button');
fillRestart.textContent = 'Restart'         
fillRestart.addEventListener('click', () => location.reload());

let playerScore = 0;
let computerScore = 0;

// Randomly return 'Rock', 'Paper' or 'Scissors'
function getComputerSelection() {
const options = ["Rock", "Paper", "Scissors"];
const randomNumber = Math.floor(Math.random() * 3);
return options[randomNumber];
}

let playerSelection = document.querySelectorAll('button');
playerSelection.forEach((button) => {
button.addEventListener('click', () => {
    playerSelection = button.innerText;

    playRound();
    for (let i = 0; i < 5 ; i++) {
        if (playerScore == 5) {
            fillResults.textContent = "You win the game!";
            restart.appendChild(fillRestart);
            document.getElementById('button1').disabled=true;
            document.getElementById('button2').disabled=true;
            document.getElementById('button3').disabled=true;
        } else if (computerScore == 5) {
            fillResults.textContent = "The computer wins the game.";
            restart.appendChild(fillRestart);
            document.getElementById('button1').disabled=true;
            document.getElementById('button2').disabled=true;
            document.getElementById('button3').disabled=true;
        };
        }; 
});
});

function playRound() {
const computerSelection = getComputerSelection();
fillPlayerChoice.innerText = `${playerSelection}`;
fillComputerChoice.innerText = `${computerSelection}`;
    if  (playerSelection === computerSelection) {
        fillRound.textContent = "It's a draw.";
    }   else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        fillRound.textContent = "Round won! " + playerSelection + " beats " + computerSelection;
        playerScore += 1;  
    }   else if (playerSelection === "Rock" && computerSelection === "Paper") {
        fillRound.textContent = "Round lost. " + playerSelection + " loses to " + computerSelection;
        computerScore += 1; 
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        fillRound.textContent = "Round lost. " + playerSelection + " loses to " + computerSelection;
        computerScore += 1; 
    }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
        fillRound.textContent = "Round won! " + playerSelection + " beats " + computerSelection;
        playerScore += 1;   
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        fillRound.textContent = "Round lost. " + playerSelection + " loses to " + computerSelection;
        computerScore += 1; 
    }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        fillRound.textContent = "Round won! " + playerSelection + " beats " + computerSelection;  
        playerScore += 1; 
    }
    fillPlayerScore.innerText = `${playerScore}`;
    fillComputerScore.innerText =`${computerScore}`;
};