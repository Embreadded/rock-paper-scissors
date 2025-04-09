function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } 
        return "scissors";
    }

function getHumanChoice() {
    let humanChoice = prompt("Will you pick Rock, Paper or Scissors?");
    console.log(humanChoice);
    return humanChoice;
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (getHumanChoice === "rock" && getComputerChoice === "scissors") {
        console.log("Rock beats Scissors! You Win!");
        humanScore += 1
        return;
    } 
    else if (getHumanChoice == "paper" && getComputerChoice == "rock") {
        console.log("Paper beats Rock! You Win!");
        humanScore += 1
        return;
    } 
    else if (getHumanChoice == "scissors" && getComputerChoice == "paper") {
        console.log("Scissors beats Paper! You Win!");
        humanScore += 1
        return;
    } 
    else if (getHumanChoice == "paper" && getComputerChoice == "scissors") {
        console.log("Scissors beats Paper! You Lose!");
        computerScore += 1
        return;
    }
    else if (getHumanChoice == "paper" && getComputerChoice == "rock") {
        console.log("Paper beats Rock! You Lose!");
        computerScore += 1
        return;
    }
    else if (getHumanChoice == "rock" && getComputerChoice == "scissors") {
        console.log("Rock beats Scissors! You Lose!");
        computerScore += 1
        return;
    } 
    else {
        console.log ("It's a Draw!")
        return;
    }
}

