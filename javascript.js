function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } 
        return "Scissors";
    }


//create function to return "rock" "paper" "scissors"//

//create prompt for user input and limit choices to only allow "rock" "paper" "scissors"//

function getHumanChoice() {
    if (getHumanChoice === "Rock" && getComputerChoice === "Scissors") {
        return "You Win!";
    } else if (getHumanChoice === "Paper" && getComputerChoice === "Rock") {
        return "You Win!";
    } else if (getHumanChoice === "Scissors" && getComputerChoice === "Paper") {
        return "You Win!";
    } return "it's a Draw"

}

console.log();