const createPlayer = (name,marker) => {
    return {
        name, marker
    }
};

const player1 = createPlayer("player1","X");
const player2 = createPlayer("player2","O");

let activePlayer = player1;

// game board module
const gameBoard = (() => {
    const gameBoardContainer = document.querySelector('.game-board');
    const display = ["O", "X", "O", "X", "O", "X", "O", "X", "O"];
    const cells = document.querySelectorAll('.cell');
    const messageDisplay = document.querySelector('#message-display');

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            handleClick(cell);
        })
    })

    const handleClick = (cell) => {
        let selected = document.querySelector(`#${cell.id}`);
        if (selected.textContent) {
            console.warn("invalid move")
        } else {
        selected.textContent = activePlayer.marker;
        return toggleActivePlayer();
        }
    }
    
    const toggleActivePlayer = () => {
        if (activePlayer === player1) {
            activePlayer = player2;
        } else if (activePlayer === player2) {
            activePlayer = player1;
        }
        messageDisplay.textContent = `${activePlayer.marker}'s turn`;
    
    };

    return {
        cells,
        display,
    }
})();



