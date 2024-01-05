let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let darkMode = false;

function handleCellClick(index) {
    if (!gameBoard[index]) {
        gameBoard[index] = currentPlayer;
        updateBoard();
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function updateBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = gameBoard[index];
        cell.classList.remove('dark-mode');
    });
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(`${currentPlayer} wins!`);
            resetGame();
            return;
        }
    }

    if (!gameBoard.includes('')) {
        alert('It\'s a draw!');
        resetGame();
    }
}

function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    updateBoard();
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    updateBoard();
}
