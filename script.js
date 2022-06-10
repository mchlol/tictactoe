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
            const winningMoves = [ 
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

    // create the callback function to act as our click handler
    const handleClick = (cell) => {
        // create a variable to store the cell that was clicked
        let selected = document.querySelector(`#${cell.id}`);
        // check if the cell already has a marker
        if (selected.textContent) {
            alert("Invalid move");
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
            // first check there's something in the first index of the nested array, then check it's the same value as the other 2 indexes
            winningMoves.forEach(function(combo, index) {
                if (gameState[combo[0]] && 
                    gameState[combo[0]] === gameState[combo[1]] &&
                    gameState[combo[0]] === gameState[combo[2]] 
                    ) {
                        winner = marker;
            }
        })
        };

        checkWinner(activePlayer.marker);
        if (winner) {
            // hide the game board
            gameBoardContainer.style = "display: none";
            // show the play again button
            playAgainBtn.style = "visibility: visible";
             // display the winner
            messageDisplay.textContent = `${winner} wins!`;
        } else if (gameState.includes("")) {
            // there are still empty cells, continue play
            toggleActivePlayer();
        } else {
            // it's a tie
            gameBoardContainer.style = "display: none";
            playAgainBtn.style = "visibility: visible";
            messageDisplay.textContent = "It's a TIE!!!!";
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
        }
    }
    
    // create a function to change the active player
    const toggleActivePlayer = () => {
        // check which player is active and set it to the other player
        activePlayer === player1 ? activePlayer = player2 : activePlayer = player1;

        // show which players turn it is in the message display
        messageDisplay.textContent = `${activePlayer.marker}'s turn`;
    
    };
    // return the gameState from the module so it is the only public variable
    return {
        gameState,
    }
})();
