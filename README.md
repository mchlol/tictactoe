# tictactoe

[Live](https://mchlol.github.io/tictactoe/)

*AKA Naughts and Crosses. The only time you'll ever call 0 "naught".*

Just another tic tac toe for [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe) part of the Full Stack JavaScript Path. 

This project is for practising using factory functions & the module pattern for organising code.


## Set Up

1. On the interface, we will need;
- a 3 x 3 grid for the game board
- player1 and player2 markers X and O
- display to show when someone has won  

*If you only ever need ONE of something use a module. If you need multiples of something, create them with factories.*

The players will be stored in objects. 
The game board and all functionality will be inside a module.

We can store the game board itself in an array;  
`const board = ["","","","","","","","",""];`

2. **Write a function to display the contents of the gameboard on the page.**  
We can access a specific point in the board eg the first cell with `board[0]`
We can also target a cell in the board through the DOM. So we need to tie those two things together. 

3. **Build the functions to allow players to add marks to a spot on the board.** 
Each cell needs to have its own ID. We'll use an event listener to update the contents of a cell with a player marker when it has been clicked. 
Based on which players turn it is, a click on a cell should populate it with the current player's marker. 

*Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places.*  

4. **Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.**  
As the game board is an array we can check the contents of each to see if someone has won.  

5. **Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!**  

### Algorithm
```

create a factory function to create players that takes a name and marker  
use the factory function to create players  
create a variable player1 with marker X  
create a variable player2 with marker O 
create a variable to store the active player  
create a game board module  
  create a variable to access the grid  
  create a varible to access the play again button  
    hide the button on page load - so we can display it when the game is over 
create a variable to set the game state, set to an array with an index for each cell in the grid   
create a variable to store the possible scenarios where someone has won or it's a draw
  eg if theres an X in cells 0, 1, and 2 of the game state array, that's three X's in a row - a win  
create a variable to access a div where we can show a message to the players  
  create a variable to hold all the cells  
  add an event listener to the cells  
  create a function to run when a cell is clicked  
    create a variable to store the cell that was clicked, accessed by its id in the html  
    check if the cell already has a marker  
      alert the user that is an invalid move  
    else show the active player marker in the cell 
    create a variable to store which cell was clicked - accessed by its dataset attribute   
    access the corresponding index in the gameState array  
    change the active player  
  create a function to change the active player  
    check which player is active and set it to the other player  
    show which players turn it is in the message display  
  return the cells and gameState variables from the module so they are the only public variables
compare the game state to the winning combos
    check which cells have been marked by the same player  
    check if all cells have been marked without any winner  
  if it's a winning move/draw  
  game is over, prevent further moves
  display winning player or draw  
  display option to play again  
if it's not a win or draw continue play 

```


## Potential features
- dice roll or coin toss etc to determine who plays first  
- alert if someone plays a cell that's already marked  
- players can choose a marker colour/icon  
- AI for a single player to play against computer

## Additional Resources
[Pure and Simple - Tic Tac Toe with Javascript](https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn), Borna Šepić  
[The World’s Most Empowering Tic-Tac-Toe JavaScript Tutorial](https://javascript.plainenglish.io/the-worlds-most-empowering-tic-tac-toe-javascript-tutorial-a889e4c20883), Anna Peterson  
[JavaScript TicTacToe if... Winner detection (answer)](https://stackoverflow.com/a/64570551/17232226)  
[Button that refreshes the page on click](https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click)

