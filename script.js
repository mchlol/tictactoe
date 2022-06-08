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
        console.log(`gameState: ${gameState}`)
        console.log(`cellNumber: ${cellNumber}`);
        console.log(`gameState[cellNumber]: ${gameState[cellNumber]}`);
        console.log(`gameState[0]: ${gameState[0]}`)
        

        if (checkWinner(activePlayer.marker)) {
            gameBoardContainer.style = "display: none";
            return messageDisplay.textContent = `${activePlayer.marker} wins!`
        }
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
        messageDisplay,
    }
})();


// create a variable to store the possible scenarios where someone has won or it's a draw
const winningCombos = [
    // eg if theres an X in cells 0, 1, and 2, that's three X's in a row.
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// compare the game state to the winning combos
function checkWinner(marker) {
    let gameOver = false;
    if (
        gameBoard.gameState[0] === marker &&
        gameBoard.gameState[1] === marker &&
        gameBoard.gameState[2] === marker
        ) {
            return gameOver = true;
        } else if (
            gameBoard.gameState[3] === marker &&
            gameBoard.gameState[4] === marker &&
            gameBoard.gameState[5] === marker
        ) {
            return gameOver = true;
        } else if (
            gameBoard.gameState[6] === marker &&
            gameBoard.gameState[7] === marker &&
            gameBoard.gameState[8] === marker
        ) {
            return gameOver = true;
        } else if (
            gameBoard.gameState[0] === marker &&
            gameBoard.gameState[3] === marker &&
            gameBoard.gameState[6] === marker
        ) {
            return gameOver = true;
        } else if (
            gameBoard.gameState[1] === marker &&
            gameBoard.gameState[4] === marker &&
            gameBoard.gameState[7] === marker
        ) {
            return gameOver = true;
        } else if (
            gameBoard.gameState[2] === marker &&
            gameBoard.gameState[5] === marker &&
            gameBoard.gameState[8] === marker
        ) {
            return gameOver = true;
        } else if (
            gameBoard.gameState[0] === marker &&
            gameBoard.gameState[4] === marker &&
            gameBoard.gameState[8] === marker
        ) {
            return gameOver = true;
        } else if (
            gameBoard.gameState[2] === marker &&
            gameBoard.gameState[4] === marker &&
            gameBoard.gameState[6] === marker
        ) {
            return gameOver = true;
        }
};
    // check which cells have been marked by the same player  
    // check the position of those cells to see if they are in a row
    // check if all cells have been marked without any of the same marker in a row

/*

    
  if it's a winning move/draw  
    game is over, prevent further moves
    display winning player or draw  
    display option to play again  
if it's not a win or draw continue play 
*/
