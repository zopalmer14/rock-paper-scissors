
function getComputerChoice() {
    let randomizer = Math.floor(Math.random() * 3)
    switch(randomizer) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("Something is wrong")
    }
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection.toLowerCase()) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    return "It's a Tie! Rock ties Rock";
                case "paper":
                    return "You Lose! Paper beats Rock";
                case "scissors":
                    return "You Win! Rock beats Scissors";
                default:
                    console.log("Something is wrong");
            }
        case "paper":
            switch(computerSelection) {
                case "rock":
                    return "You Win! Paper beats Rock";
                case "paper":
                    return "It's a Tie! Paper ties Paper";
                case "scissors":
                    return "You Lose! Scissors beats Paper";
                default:
                    console.log("Something is wrong");
            }
        case "scissors":
            switch(computerSelection) {
                case "rock":
                        return "You Lose! Rock beats Scissors";
                case "paper":
                    return "You Win! Scissors beats Paper";
                case "scissors":
                    return "It's a Tie! Scissors ties Scissors";
                default:
                    console.log("Something is wrong");
            }
        default:
            console.log("Something is wrong");
    }
}

const playerSelection = getComputerChoice();
const computerSelection = getComputerChoice();
console.log(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));