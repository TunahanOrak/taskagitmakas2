const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.id;
        const computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);
        showResult(winner, playerChoice, computerChoice);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function showResult(winner, playerChoice, computerChoice) {
    if (winner === 'player') {
        playerScore++;
        resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else if (winner === 'computer') {
        computerScore++;
        resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    } else {
        resultText.textContent = `It's a draw! You both chose ${playerChoice}.`;
    }
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
}
