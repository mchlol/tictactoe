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
- button to refresh when game is over  

*"If you only ever need ONE of something use a module. If you need multiples of something, create them with factories."*

The players will be stored in objects. 
The game board and all functionality will be inside a module.  


2. **Write a function to display the contents of the gameboard on the page.**  

3. **Build the functions to allow players to add marks to a spot on the board.** 

*"Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places."*  

4. **Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.**  

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
create a variable to hold a nested array of all the possible winning moves  
  eg if theres an X in cells 0, 1, and 2 of the game state array, that's three X's in a row - a win  
create a variable to access a div where we can show a message to the players  
  create a variable to hold all the cells  
  add an event listener to the cells  
  create the callback function to act as our click handler
    create a variable to store the cell that was clicked
    check if the cell already has a marker  
      alert the user that is an invalid move  
    else show the active player marker in the cell 
    create a variable to store which cell was clicked - accessed by its dataset attribute - the dataset attribute is a string so convert it to a number  
    access the corresponding index in the gameState array and update it to the active player marker  
    check if the active player has made a winning move
      check if the game state array has the same marker in each nested array
        loop through all the winning moves arrays
          check if the first index in the nested array has a marker in the game state array  
          then check if that marker is in the other two indexes of the nested array - using logical AND  
    if someone has won  
      hide the game board
      display the play again button
      show the winner in the message display
    if there are still empty cells in the game state
      toggle the active player
    else hide the game board, display the play again button, show it's a tie in the message display
    create the toggle player function
      check which player is active and set it to the other player
      show which players turn it is in the message display
  return only the game state from the module so all other variables and functions are private
  
```


## Potential features
- dice roll or coin toss etc to determine who plays first  
- players can choose a marker colour/icon  
- AI for a single player to play against computer  
- some animation would be neat  

## Additional Resources Used
- [Pure and Simple - Tic Tac Toe with Javascript](https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn), Borna Šepić  
- [The World’s Most Empowering Tic-Tac-Toe JavaScript Tutorial](https://javascript.plainenglish.io/the-worlds-most-empowering-tic-tac-toe-javascript-tutorial-a889e4c20883), Anna Peterson  
- [JavaScript TicTacToe if... Winner detection (answer)](https://stackoverflow.com/a/64570551/17232226)  
- [Button that refreshes the page on click](https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click)  
- [How to keep your footer where it belongs](https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/#:~:text=A%20footer%20is%20the%20last,is%20taller%20than%20the%20viewport.)  

