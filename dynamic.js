
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

// GAME MANAGEMENT

let userScore = 0;
let computerScore = 0;
let maxRound = 5;

// grab the message output div
const div = document.querySelector('#result-output'); 

// grab the nodeList of all the buttons
const buttons = document.querySelectorAll('button');

// iterate over the buttons and create an eventListener for each 
buttons.forEach((button) => {
    // add a click listener that passes the button's id as the playerSelection to playRound
    button.addEventListener('click', () => {
        let [result, message] = playRound(button.id, getComputerChoice());
        
        // adjust the scores accordingly based on the result
        switch(result) {
            case -1:
                computerScore++;
                break;
            case 1:
                userScore++;
                break;
        }

        // check game end scenario
        if (userScore >= maxRound || computerScore >= maxRound) {
            // generate and output the game end message depending on the relative score values
            let gameEndMessage;
            if (userScore > computerScore) {
                gameEndMessage = `You Win! You won ${userScore} rounds and the computer only won ${computerScore} rounds`;
            } else if (userScore < computerScore) {
                gameEndMessage = `You Lose! The computer won ${computerScore} rounds and you only won ${userScore} rounds`;
            } else {
                gameEndMessage = `It's a Tie! You and the computer both won ${userScore} rounds`;
            }
            div.textContent = gameEndMessage;

            // reset the scores
            userScore = 0;
            computerScore = 0;
        } else {
            // set the div's textContent to the message and scores
            div.textContent = message + `\r\nUser Score: ${userScore}\r\nComputer Score: ${computerScore}`;
        }
    });
});

