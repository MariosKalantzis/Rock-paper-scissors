

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
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

const getHumanChoice = () => {
    return prompt("Please type your choice : Rock , Paper , Scissors").toLowerCase();
}




const playRound = (humanSelection, computerSelection) => {

    if (humanSelection === computerSelection) {
        return 'draw'
    }
    else if (humanSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win'
    }
    else if (humanSelection === 'paper' && computerSelection === 'rock') {
        return 'You win'
    }
    else if (humanSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win'
    }
    else return 'computer wins'
}

playRound(humanSelection, computerSelection);


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

const playGame = () => {

}