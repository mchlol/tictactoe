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

// create a variable to store if the game is over
let gameOver = false;

// create a variable to store how many turns there have been
let turns = 0;

// create a game board module
const gameBoard = (() => {
    // create a variable to access the grid
    const gameBoardContainer = document.querySelector('.game-board');

    // create a variable to access the button
    const playAgainBtn = document.querySelector("#play-again");
    // hide the button on page load
    playAgainBtn.style = "visibility: hidden";
    

    // create a variable to set the game state - an array with an index for each cell in the grid
    const gameState = [
        "", "", "", 
        "", "", "", 
        "", "", ""
    ];

            // create a variable to hold a nested array of all the possible winning moves
            const winningMoves = [ // this is inside the click handler
            // eg if theres an X in cells 0, 1, and 2, that's three X's in a row.
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
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
            console.warn("Invalid move");
        } else {
        // show the active player marker in the cell
        selected.textContent = activePlayer.marker;
        // create a variable to store which cell was clicked - accessed by its dataset attribute, a string, so use parseIn to convert it to a number
        let cellNumber = parseInt(cell.dataset.index);
        // update the game state with the move
        gameState[cellNumber] = activePlayer.marker;
        
        // check if the active player has made a winning move

        // check if the gameState array has the same marker in each nested array
        let winner;
        const checkWinner = (marker) => {
            console.log(`checking if ${marker} won...`)

            // first check there's something in the first index of the nested array, then check it's the same value as the other 2 indexes
            winningMoves.forEach(function(combo, index) {
                if (gameState[combo[0]] && 
                    gameState[combo[0]] === gameState[combo[1]] &&
                    gameState[combo[0]] === gameState[combo[2]] 
                    ) {
                        winner = marker;
                    
                    // hide the game board
                    gameBoardContainer.style = "display: none";
                    // show the play again button
                    playAgainBtn.style = "visibility: visible";
                     // display the winner
                    
                    } else if (gameState.includes("")) {
                        // there are still empty cells
                        console.log("continue play");
                    } else {
                        messageDisplay.textContent = "Tie!";
                    }
            })
        };

        checkWinner(activePlayer.marker);
        if (winner) {
            messageDisplay.textContent = `${activePlayer.marker} wins!`;
        } else {
            toggleActivePlayer();
        }
        

        /*  this could be a switch statement?
        if (winner) {
            return who won
        } else if (gameBoard.includes("")) {
                 an empty space
            return continue game
        } else {
            it's a tie
        }
        */

        /* if someone has won:
        // hide the game board
        gameBoardContainer.style = "display: none";
        // show the play again button
        playAgainBtn.style = "visibility: visible";
        // display the winner
        return messageDisplay.textContent = `${activePlayer.marker} wins!`
        */


        // change the active player
        // return toggleActivePlayer();
        }
    }
    
    // create a function to change the active player
    const toggleActivePlayer = () => {
        // check which player is active and set it to the other player
        activePlayer === player1 ? activePlayer = player2 : activePlayer = player1;

        // show which players turn it is in the message display
        messageDisplay.textContent = `${activePlayer.marker}'s turn`;
    
    };
    // return the cells and gameState variables from the module so they are the only public variables
    return {
        cells,
        gameState,
        winningMoves,
    }
})();


// create a variable to store the possible scenarios where someone has won or it's a draw


/* if (winner) {
    return who won
} else if (spaces left to play) {
    return continue game
} else {
    it's a tie
}


// compare the game state to the winning combos
function checkWinner(marker) {

    // if every index in winningCombos[0] || winningCombos[1] etc contains marker, it's a win
        // loop through the array
    // if every index contains a value but is not one of the combos its a draw
    
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
        } else if (
            console.log(`check for a tie?`)
        ) {
            gameBoard.messageDisplay.textContent = "Tie game!"
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
