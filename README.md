# tictactoe

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
```
const player = (marker) => {

    return marker;
}
``` 

We can store the game board in an array;  
`const board = ["","","","","","","","",""];`

2. **Write a function to display the contents of the gameboard on the page.**  
We can access a specific point in the board eg the first cell with `board[0]`
We can also target a cell in the board through the DOM. So we need to tie those two things together. 

3. **Build the functions to allow players to add marks to a spot on the board.** 
Each cell needs to have its own ID. We'll use an event listener to update the contents of a cell with a player marker when it has been clicked. 
Based on which players turn it is, a click on a cell should populate it with the current player's marker. 

*Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places.*  

4. **Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.**  
As the game board is an array of nested arrays we can check the contents of each to see if someone has won.  

5. **Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!**  

### Pseudocode
```
create a player factory function  
create two players with different markers 
  we should return the name and the marker  
set active player to player1
player1 clicks on a cell on the gameboard  
the cell will be populated with the players marker  
set active player to player2 
player2 clicks on a cell on the gameboard  
  if there's already a marker do nothing  
  else display current player's marker in cell   
for each click we should check if it's a winning move/draw  
if it's a winning move/draw
  game is over, prevent further moves
  display winning player or draw  
  display option to play again  
  
```

## Possible Upgrades
- dice roll or coin toss etc to determine who plays first  
- alert if someone plays a cell that's already marked  
- players can choose a marker colour/icon  

## Additional Resources
[Pure and Simple - Tic Tac Toe with Javascript](https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn), Borna Šepić  
[Button that refreshes the page on click](https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click)

## Method

Write a factory function to create player objects;  
```
const createPlayer = (name,marker) => {
    return {
        name, marker
    }
};
```
Create the two players and set their names and markers;  
```
const player1 = createPlayer("player1","X");
const player2 = createPlayer("player2","O");
```

Set the default active player on page load;  

```
let activePlayer = player1;
```