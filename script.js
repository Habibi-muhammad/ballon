const startButton = document.getElementById('start-button');
const scoreDisplay = document.getElementById('score-display');
const timeDisplay = document.getElementById('time-display');
const circle = document.getElementById('circle');

let score = 0;
let timeLeft = 30;
let gameInterval;
let timeInterval;

// Memulai permainan
startButton.addEventListener('click', () => {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = `Skor: ${score}`;
    timeDisplay.textContent = `Waktu: ${timeLeft}`;
    startButton.style.display = 'none';
    circle.style.display = 'block';
    startGame();
});

// Fungsi memulai permainan
function startGame() {
    moveCircle();
    gameInterval = setInterval(moveCircle, 1000);

    timeInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = `Waktu: ${timeLeft}`;
        if (timeLeft === 0) {
            endGame();
        }
    }, 1000);
}

// Fungsi menggerakkan lingkaran
function moveCircle() {
    const gameContainer = document.getElementById('game-container');
    const maxX = gameContainer.offsetWidth - circle.offsetWidth;
    const maxY = gameContainer.offsetHeight - circle.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
}

// Tambahkan skor saat lingkaran diklik
circle.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Skor: ${score}`;
});

// Mengakhiri permainan
function endGame() {
    clearInterval(gameInterval);
    clearInterval(timeInterval);
    circle.style.display = 'none';
    alert(`Permainan selesai! Skor akhir Anda: ${score}`);
    startButton.style.display = 'block';
}
