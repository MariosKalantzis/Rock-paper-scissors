

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

let humanScore = 0;
let computerScore = 0;
const playRound = (humanSelection, computerSelection) => {


    if (humanSelection === computerSelection) {
        return 'draw'
    }
    else if (humanSelection === 'rock' && computerSelection === 'scissors') {
        humanScore++;
        return 'You win! Rock beats Scissors'
    }
    else if (humanSelection === 'paper' && computerSelection === 'rock') {
        humanScore++;
        return 'You win! Paper beats Rock'
    }
    else if (humanSelection === 'scissors' && computerSelection === 'paper') {
        humanScore++;
        return 'You win! Scissors beats Paper'

    }
    else {
        computerScore++;
        return `Computer Wins! ${computerSelection} beats ${humanSelection}`


    }


}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const container = document.querySelector('.container');
const winnerMessage = document.querySelector('.winner-message');
const restartButton = document.querySelector('.play');
const restart = document.querySelector('.restart');
const playerChoice = document.querySelector('.player-choice');
const compChoice = document.querySelector('.computer-choice');

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    compChoice.textContent = computerSelection === 'rock' ? "🪨" : computerSelection === 'paper' ? "📄" : "✂️";
    scoreRound.textContent = playRound('rock', computerSelection);
    playerChoice.textContent = "🪨";
    scoreDisplay.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
    checkWinner();

});

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    compChoice.textContent = computerSelection === 'rock' ? "🪨" : computerSelection === 'paper' ? "📄" : "✂️";
    scoreRound.textContent = playRound('paper', computerSelection);
    playerChoice.textContent = "📄";
    scoreDisplay.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
    checkWinner();
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    compChoice.textContent = computerSelection === 'rock' ? "🪨" : computerSelection === 'paper' ? "📄" : "✂️";
    scoreRound.textContent = playRound('scissors', computerSelection);
    playerChoice.textContent = "✂️";
    scoreDisplay.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
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
        winnerMessage.style.color = '#fbbf24';

    }
    else if (computerScore === 5) {
        winnerMessage.textContent = 'Good luck next time';
        restart.style.display = 'flex';
        winnerMessage.style.color = 'crimson';
    }
}

restartButton.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    scoreDisplay.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
    restart.style.display = 'none';
    scoreRound.textContent = '';
});




