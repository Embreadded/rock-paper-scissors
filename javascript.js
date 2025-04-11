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
        alert("It's a Tie!")
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

    function playGame(gameRound = 1) {
        if (gameRound > 5) {
            alert("Game Over!");
        if (humanScore > computerScore) {
            alert("You win beating the computer " + humanScore + " to " + computerScore);
        } else if (computerScore > humanScore) {
            alert("You lost to the computer " + computerScore + " to " + humanScore);
        } else {
            alert("It's a tie")
        } 
            return;
        }  
        const humanChoice = getHumanChoice();
        if (!humanChoice) {
            playGame(gameRound);
            return;
        }
        const computerChoice = getComputerChoice();
        console.log("Player picks " + humanChoice);
        console.log("Computer picks " + computerChoice);

        playRound(humanChoice, computerChoice);
        console.log("Player Score = " + humanScore, "Computer Score = " + computerScore);

        playGame(gameRound + 1)
    }

playGame();