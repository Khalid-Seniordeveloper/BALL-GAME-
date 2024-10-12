let score = 0;
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const gameArea = document.getElementById('game-area');

function moveBall() {
    const x = Math.random() * (gameArea.clientWidth - 30);
    const y = Math.random() * (gameArea.clientHeight - 30);
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
}

ball.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    moveBall();
});

moveBall();
