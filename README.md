# Tic Tac Toe Game
#### Video Demo: https://youtu.be/9qZ0Hnnr7Fs
#### Description:
A basic game of tic tac toe implemented in HTML, CSS and Javascript.
Overview
This documentation provides a comprehensive overview of the Tic-Tac-Toe game project, detailing the base HTML structure, the integration of Bootstrap for styling, and the dynamic updates facilitated by JavaScript. The game is designed to offer players a classic Tic-Tac-Toe experience within a visually appealing and interactive interface.

Program contains 3 files
1.	tictactoe.html

-	This documentation outlines the base HTML structure, along with the integration of Bootstrap for styling, in the Tic-Tac-Toe game project.
-	The base HTML structure of the project serves as the foundation for the game's user interface. It includes elements such as buttons, paragraphs, and containers structured using Bootstrap classes for layout consistency and responsiveness.
-	Bootstrap is utilized to enhance the visual presentation of the game interface, providing pre-designed components and utilities for styling.
-	The game board consists of a 3x3 grid of buttons, where players take turns placing their symbols ('X' or 'O'). This interactive grid serves as the primary means of gameplay, allowing players to make moves by clicking on the individual cells. JavaScript logic governs the game's functionality, handling player turns, win detection, tie conditions, and updating the game state accordingly.
-	JavaScript plays a crucial role in the Tic-Tac-Toe game, facilitating dynamic updates and interactions within the HTML document. Certain paragraphs within the HTML are dynamically populated with game results and information, such as announcing the winner or displaying a tie message. This real-time updating of content enriches the user experience and provides immediate feedback to players as they progress through the game.
     
2. style.css
 Grid Layout with CSS Grid:

- The game board is constructed utilizing the CSS grid layout, where each cell is defined with a width of 100 pixels.
- To accommodate the 3x3 layout, the grid is set to a height of 300 pixels and a width of 320 pixels.
- The layout of the grid cells uses the CSS grid property grid-template-columns, ensuring uniformity in the presentation of the game board.

Button Styling:
-	Each button in the grid is wrapped within a <div> element to apply CSS grid styling.
-	The <div> elements representing the grid cells have a height and width of 100% to fill the parent grid cell completely.
-	No padding is applied to ensure that the buttons fill the entire grid cell without any additional spacing.
3. script.js
The JavaScript code for the project includes the following functionalities:

Starting and Resetting the Game:
- The game can be started and reset using appropriate buttons or functions.
- The game start button initialized the board which is initially disabled but will be enabled once the start button is clicked.
- The reset button resets the board and all the scores to allow for the game to be started from scratch with all scores at nil
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
