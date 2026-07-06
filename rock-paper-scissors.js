

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


}
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

    // for (let i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();

    //     const result = playRound(humanSelection, computerSelection);
    //     console.log(result);
    //     console.log(`Score — You: ${humanScore} | Computer: ${computerScore}`);
    // }
    // if (humanScore > computerScore) {
    //     return 'You are the Winner'
    // }
    // else if (humanScore < computerScore) {
    //     return 'Good luck next time'
    // }
    // else return 'draw'

}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const container = document.querySelector('.container');
const winnerMessage = document.querySelector('.winner-message');
const restartButton = document.querySelector('.play');
const restart = document.querySelector('.restart');


rockButton.addEventListener('click', () => {
    console.log(playRound('rock', getComputerChoice()));
    scoreDisplay.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
    scoreRound.textContent = playRound('rock', getComputerChoice());
    checkWinner();

});

paperButton.addEventListener('click', () => {
    console.log(playRound('paper', getComputerChoice()));
    scoreDisplay.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
    scoreRound.textContent = playRound('paper', getComputerChoice());
    checkWinner();
});

scissorsButton.addEventListener('click', () => {
    console.log(playRound('scissors', getComputerChoice()));
    scoreDisplay.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
    scoreRound.textContent = playRound('scissors', getComputerChoice());
    checkWinner();
});

const scoreDisplay = document.createElement('div');
scoreDisplay.classList.add('score-display');
container.appendChild(scoreDisplay);
scoreDisplay.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;

const scoreRound = document.createElement('div');
scoreRound.classList.add('score-round');
container.appendChild(scoreRound);



const checkWinner = () => {
    if (humanScore === 5) {
        winnerMessage.textContent = 'You are the Winner';
        restart.style.display = 'flex';
    }
    else if (computerScore === 5) {
        winnerMessage.textContent = 'Good luck next time';
        restart.style.display = 'flex';
    }
}

restartButton.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    scoreDisplay.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
    restart.style.display = 'none';
});




