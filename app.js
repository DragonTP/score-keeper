const p1 = {
    score: 0,
    player: 1,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}
const p2 = {
    score: 0,
    player: 2,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto')
const winnerPlayer = document.querySelector('.subtitle')

let winningScore = 3;
let isGameOver = false;

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset()
})

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
            winnerPlayer.innerText = `Player ${player.player} win`
            winnerPlayer.classList.add('for-winner')
        }
        player.display.innerText = player.score;
    }
}

p1.button.addEventListener('click', () => updateScore(p1, p2))
p2.button.addEventListener('click', () => updateScore(p2, p1))
resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (const p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('winner', 'loser');
        p.button.disabled = false;
    }
    winnerPlayer.classList.remove('for-winner');
    winnerPlayer.innerText = 'Use the buttons below to keep score';
}