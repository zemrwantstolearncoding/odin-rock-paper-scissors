
let humanScore = 0;
let computerScore = 0;
const scoreDiv = document.querySelector("#showScore");

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 3);
    return options[num];
}

let outcome = null;
let score = null;
let finalMessage = null;

function playRound(humanChoice, computerChoice) {
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach((button) => {
        button.classList.remove("selected");
    });

    if (!outcome) {
        outcome = document.createElement("p");
        scoreDiv.appendChild(outcome);
    }
    if (!score) {
        score = document.createElement("p");
        scoreDiv.appendChild(score);
    }

    if (humanChoice === computerChoice) {
        outcome.textContent = "Draw."
        score.textContent = `Player ${humanScore} : ${computerScore} Computer`;
    }
    else {
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                humanScore += 1;
                outcome.textContent = "Rock beats scissors. You win this round!";
                score.textContent = `Player ${humanScore} : ${computerScore} Computer`;
            }
            else {
                computerScore += 1;
                outcome.textContent = "Paper beats rock. Computer gets the point.";
                score.textContent = `Player ${humanScore} : ${computerScore} Computer`;
            }
        }
        if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore += 1;
                outcome.textContent = "Paper beats rock. You win this round!";
                score.textContent = `Player ${humanScore} : ${computerScore} Computer`;
            }
            else {
                computerScore += 1;
                outcome.textContent = "Scissors beat paper. Computer gets the point.";
                score.textContent = `Player ${humanScore} : ${computerScore} Computer`;
            }
        }
        if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                humanScore += 1;
                outcome.textContent = "Scissors beat paper. You win this round!";
                score.textContent = `Player ${humanScore} : ${computerScore} Computer`;
            }
            else {
                computerScore += 1;
                outcome.textContent = "Rock beats scissors. Computer gets the point.";
                score.textContent = `Player ${humanScore} : ${computerScore} Computer`;
            }
        }
    }

    const humanChoiceButton = document.querySelector(`#human #${humanChoice}`);
    humanChoiceButton.classList.add("selected");
    const computerChoiceButton = document.querySelector(`#computer #${computerChoice}`);
    computerChoiceButton.classList.add("selected");
}

function humanWon() {
    if (!finalMessage) {
        finalMessage = document.createElement("p");
        scoreDiv.appendChild(finalMessage);
    }
    score.textContent = `Player ${humanScore} : ${computerScore} Computer (Game Over)`;
    finalMessage.textContent = "Congratulations. You won! Reload the page to play again.";
    humanScore = 0;
    computerScore = 0;
}

function computerWon() {
    if (!finalMessage) {
        finalMessage = document.createElement("p");
        scoreDiv.appendChild(finalMessage);
    }
    score.textContent = `Player ${humanScore} : ${computerScore} Computer (Game Over)`;
    finalMessage.textContent = "Computer won. GG. Reload the page to play again.";
    humanScore = 0;
    computerScore = 0;
}

const buttons = document.querySelectorAll("#human button");
let winner = false;
buttons.forEach((button) => {
    button.addEventListener("click", function playGame() {
        if (winner) {
            button.removeEventListener("click", playGame());
        }
        playRound(button.id, getComputerChoice());
        if (humanScore === 5) {
            humanWon();
            winner = true;
        }
        else if (computerScore === 5) {
            computerWon();
            winner = true;
        }
    });
});