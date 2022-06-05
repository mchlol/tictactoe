const createPlayer = (name,marker) => {
    return {
        name, marker
    }
};

const player1 = createPlayer("player1","X");
const player2 = createPlayer("player2","O");

let activePlayer = player1;

const gameBoardContainer = document.querySelector('.game-board');

const gameBoard = {
    cells: document.querySelectorAll('.cell'),
    display: ["O", "X", "O", "X", "O", "X", "O", "X", "O"]
};

gameBoard.cells.forEach(cell => {
    cell.addEventListener('click', () => {
        handleClick(cell);
    })
})

function handleClick(cell) {
    let selected = document.querySelector(`#${cell.id}`);
    if (selected.textContent) {
        console.log("invalid move")
    } else {
    selected.textContent = activePlayer.marker;
    return toggleActivePlayer();
    }
}

function toggleActivePlayer() {
    if (activePlayer === player1) {
        activePlayer = player2;
    } else if (activePlayer === player2) {
        activePlayer = player1;
    }
    console.log(`${activePlayer.name}'s turn`);
};