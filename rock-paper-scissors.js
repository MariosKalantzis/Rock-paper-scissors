

const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'rock'
    }
    else if (random === 1) {
        return 'paper'
    }
    else return 'scissors'
}

const getHumanChoice = () => {
    return prompt("Please type your choice : Rock , Paper , Scissors").toLowerCase();
}
const playGame = () => {

    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanSelection, computerSelection) => {


        if (humanSelection === computerSelection) {
            return 'draw'
        }
        else if (humanSelection === 'rock' && computerSelection === 'scissors') {
            humanScore++;
            return 'You win'
        }
        else if (humanSelection === 'paper' && computerSelection === 'rock') {
            humanScore++;
            return 'You win'
        }
        else if (humanSelection === 'scissors' && computerSelection === 'paper') {
            humanScore++;
            return 'You win'

        }
        else {
            computerScore++;
            return 'computer wins'
        }


    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(humanSelection, computerSelection);
        console.log(result);
        console.log(`Score — You: ${humanScore} | Computer: ${computerScore}`);
    }
    if (humanScore > computerScore) {
        return 'You are the Winner'
    }
    else if (humanScore < computerScore) {
        return 'Good luck next time'
    }
    else return 'draw'

}

console.log(playGame());


