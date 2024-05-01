# Tic Tac Toe Game
#### Video Demo: https://youtu.be/9qZ0Hnnr7Fs
#### Description:
A basic game of tic tac toe implemented in HTML, CSS and Javascript.
Programs contains 3 files
1. tictactoe.html
- This documentation outlines the base HTML structure, along with the integration of Bootstrap for styling, in the Tic-Tac-   Toe game project.
- The game features a 3x3 grid of buttons as the game board, where players take turns placing their symbols ('X' or 'O').
- Additionally, JavaScript dynamically updates certain paragraphs within the HTML document with game results and information.
     
2. style.css
   - includes the css to style the game
  
3. script.js
The JavaScript code for the project includes the following functionalities:

Starting and Resetting the Game:
- The game can be started and reset using appropriate buttons or functions.
Playing the Game:
- Players take turns making moves by clicking on empty cells in the grid (button).
Checking for Wins:
- The game logic checks for wins horizontally, vertically, and diagonally after each move.
- If a player gets three of their symbols in a row, they are declared the winner.
Checking for Ties:
- If all cells are filled and no player has three in a row, the game is declared a tie.
Keeping Scores:
- The game keeps track of scores for each player and ties.
Displaying Scores and Winners:
- Scores and the winner of each game are displayed to the players.

Implementation Details
The implementation details of the JavaScript code are as follows:

Event Listeners:
- The game utilizes event listeners to detect clicks on the grid cells/buttons.
- Click events trigger the appropriate game logic functions.
Player Selection:
- A function rotates between the two players, ensuring each click alternates between 'X' and 'O'.
Move Validation:
- When a cell is clicked, the game verifies if it's empty before allowing the current player to make a move.
Once a move is made, the board prevents the current move from being overridden by the other player.
Winning Condition:
- After each move, the game checks if any player has achieved three in a row horizontally, vertically, or diagonally.
- If a win condition is met, the game declares the corresponding player as the winner, disables incomplete cells, and resets the board after 3 seconds.
Tie Condition:
- If all cells are filled and no player has won, the game declares a tie and records it in the score object.

  
  
