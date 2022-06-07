// create a factory function to create players that takes a name and marker
const createPlayer = (name,marker) => {
    return {
        name, marker
    }
};

// use the factory function to create players and set their markers
const player1 = createPlayer("player1","X");
const player2 = createPlayer("player2","O");

// create a variable to store the active player
let activePlayer = player1;

// create a game board module
const gameBoard = (() => {
    // create a variable to access the grid
    const gameBoardContainer = document.querySelector('.game-board');

    // create a variable to set the game state - an array with an index to correspond to each cell in the grid
    const gameState = [
        "", "", "", 
        "", "", "", 
        "", "", ""
    ];

    // create a variable to access a div where we can show a message to the players
    const messageDisplay = document.querySelector('#message-display');

    // create a variable to hold all the cells
    const cells = document.querySelectorAll('.cell');

    // add an event listener to the cells, which will run a function when a cell is clicked
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            handleClick(cell);
        })
    })

    // create a function to run when a cell is clicked
    const handleClick = (cell) => {
        // create a variable to store the cell that was clicked, accessed by its id in the html
        let selected = document.querySelector(`#${cell.id}`);
        // check if the cell already has a marker
        if (selected.textContent) {
            alert("Invalid move");
        } else {
        // show the active player marker in the cell
        selected.textContent = activePlayer.marker;
        // create a variable to store which cell was clicked - accessed by its dataset attribute
        let cellNumber = parseInt(cell.dataset.index);
        // access the corresponding index in the gameState array
        gameState[cellNumber] = activePlayer.marker;
        // change the active player
        return toggleActivePlayer();
        }
    }
    
    // create a function to change the active player
    const toggleActivePlayer = () => {
        // check which player is active and set it to the other player
        if (activePlayer === player1) {
            activePlayer = player2;
        } else if (activePlayer === player2) {
            activePlayer = player1;
        }
        // show which players turn it is in the message display
        messageDisplay.textContent = `${activePlayer.marker}'s turn`;
    
    };
    // return the cells and gameState variables from the module so they are the only public variables
    return {
        cells,
        gameState,
    }
})();

// create a variable to store the possible scenarios where someone has won or it's a draw
const winningCombos = [
    [
    "", "", "", 
    "", "", "", 
    "", "", ""
    ],
];

