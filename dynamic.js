
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
                    return [0, "It's a Tie! Rock ties Rock"];
                case "paper":
                    return [-1, "You Lose! Paper beats Rock"];
                case "scissors":
                    return [1, "You Win! Rock beats Scissors"];
                default:
                    console.log("Something is wrong");
            }
        case "paper":
            switch(computerSelection) {
                case "rock":
                    return [1, "You Win! Paper beats Rock"];
                case "paper":
                    return [0, "It's a Tie! Paper ties Paper"];
                case "scissors":
                    return [-1, "You Lose! Scissors beats Paper"];
                default:
                    console.log("Something is wrong");
            }
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    return [-1, "You Lose! Rock beats Scissors"];
                case "paper":
                    return [1, "You Win! Scissors beats Paper"];
                case "scissors":
                    return [0, "It's a Tie! Scissors ties Scissors"];
                default:
                    console.log("Something is wrong");
            }
        default:
            console.log("Something is wrong");
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    let maxRound = 5;
    // loop over the rounds until we reach the max round (end of game)
    for (let currentRound = 0; currentRound < maxRound; currentRound++) {
        // grab the input from the user/player
        let userInput = prompt("Choose Rock, Paper, or Scissors");
        // play a round
        let [result, message] = playRound(userInput, getComputerChoice());
        // output the message to the console and adjust the scores accordingly based on the result
        console.log(message);
        switch(result) {
            case -1:
                computerScore++;
                break;
            case 1:
                userScore++;
                break;
            default:
        }
    }
    // generate and output the game end message depending on the relative score values
    let gameEndMessage;
    if (userScore > computerScore) {
        gameEndMessage = `You Win! You won ${userScore} rounds and the computer only won ${computerScore} rounds`;
    } else if (userScore < computerScore) {
        gameEndMessage = `You Lose! The computer won ${computerScore} rounds and you only won ${userScore} rounds`;
    } else {
        gameEndMessage = `It's a Tie! You and the computer both won ${userScore} rounds`;
    }
    console.log(gameEndMessage);
}

// create a nodeList of all the buttons
const buttons = document.querySelectorAll('button');
console.log(buttons);

// iterate over the buttons and create an eventListener for each 
buttons.forEach((button) => {
    // add a click listener that passes the button's id as the playerSelection to playRound
    button.addEventListener('click', () => {
        let [result, message] = playRound(button.id, getComputerChoice());
        console.log(result);
        console.log(message);
    });
});

