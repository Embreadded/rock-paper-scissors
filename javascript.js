function getHumanChoice() {
    const humanChoice = prompt("What will you pick? Rock, Paper or Scissors?").toLowerCase();
    if (
        humanChoice === "rock" ||
        humanChoice === "paper" ||
        humanChoice === "scissors"
    ) {
        return humanChoice;
    } else {
        alert("Please enter a valid option")
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
   
    if (computerChoice === 0) {
       return "rock";
    } else if (computerChoice === 1){
       return "paper";
    } else {
       return "scissors";
    }
   }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie!"
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ) {
            alert("You Win! " + humanChoice + " beats " + computerChoice);
            humanScore ++;
            console.log(humanScore);
        }
        else if (
            (humanChoice === "paper" && computerChoice === "rock") ) {
                alert("You Win! " + humanChoice + " beats " + computerChoice);
                humanScore ++;
                console.log(humanScore);
        }   
        else if (
        (humanChoice === "scissors" && computerChoice === "paper") ) {
            alert("You Win! " + humanChoice + " beats " + computerChoice);
            humanScore ++;
            console.log(humanScore);
        }
        else {
            alert("You Lose! " + computerChoice +" beats " + humanChoice);
            computerScore ++;
            console.log(computerScore);
        }
    }