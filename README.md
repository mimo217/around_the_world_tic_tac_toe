# unit-1-project
<h1><b>Around the World Tic Tac Toe Browser Game</b></h1>

A Tic Tac Toe browser game that is "Around the World" themed with 5 different rounds. Each round is destination based, with unique set of image icons to represent "x" and "o" for each player, inspired by the city.

<h2><b>Wireframe</b></h2>
<a href="https://imgur.com/OPfhnqp"><img src="https://i.imgur.com/OPfhnqp.png" title="wireframe"/></a>

<h2><b>Psuedocode</b></h2>
<br>Set 'roundNum' to 5
<br>Set 'player1' to 'O'
<br>Set 'player2' to 'X'
<br>Declare gameBoard as a 2D array with 3 rows and 3 columns filled with empty strings 
<br>Set currentPlayer to player1
<br>Set gameIsOngoing to true
<br>Declare ‘player1ImgSrc’ and ‘player2ImgSrc’
<br>Declare function ‘resetGameBoard’ that takes a destination parameter
<br>Reset the gameboard to an empty board
<br>Remove Xs and Os from the game board
<br>Reset currentPlayer to ‘player1’
<br>Reset “gameIsOngoing to ‘true’
<br>Reset renderGameBoard()
<br>If ‘destination’ is ‘Paris’, ‘Lima,’ ‘London,’ ‘Cairo,’ ‘Beijing’ set 'player1ImgSrc' to 'dest1O' and 'player2ImgSrc' to 'dest1X'
<br>Add event listeners to destination buttons
<br>Set the function to ‘removeClickEvent()’
<br>Get all elements with the ‘cell’ class and store them in ‘cells” array
<br>For each ‘cell’ in “cells”, remove ‘click’ 'eventListener'
<br>Set function 'showMessage’
<br>Get the elements with 'popup-banner', 'popup-message', and 'close-btn' IDs
<br>Set 'popupMessage' to 'message'
<br>Set 'popupBanner' to 'block'
<br>End Function
<br>Set function ‘displaycell’
<br>if gameBoard[row][col] is empty, create ‘img” element with current player
<br> if ‘currentPlayer’ is player1, show “player1ImgSrc, else show “player1ImgSrc
<br> Add ‘img’ to ‘cel’
<br> Update gameboard
<br> Check for ‘checkWin()
<br> if winner is not null
<br>Remove ‘removeClickEvent()
<br> display ‘showMessage
<br> else if ‘CheckDraw’ set "GameIsOngoing” to false
<br> remove ‘removeClickEvent()
<br> display ‘showMessage
<br> else,switch to other ‘currentPlayer’
<br> Set function renderGameBoard
<br> get all ‘.cell’ elements
<br> add .addEventListener to cells in ‘row’ and ‘column’
<br> End function
<br> Set function checkWin
<br> Check if row[0] = row[1] and row[1] is = row[2] and row[0] is not empty
<br> return row[0]
<br> Check if [0][col]=[1][col] and [1][col] is = [2][col] and [0][col] is not empty:
<br> return [0][col]
<br> if [0][0] = [1][1] and [1][1] = [2][2] and [0][0] is not empty:
<br> return [0][0]
<br> else if [0][2] is equal to [1][1] and [1][1] is equal to[2][0] and [0][2] is not empty:
<br> return [0][2]
<br> Check if all cells in ‘row’ and ‘column” are displayed
<br> for each row and cell 
<br> if cell is empty
<br> return false otherwise return true
<br> End function
<br> Call renderGameboard
<br> Call resetGameboard
<br>
<h2>Screenshot(s):</h2>
<a href="https://imgur.com/niLR3yx"><img src="https://i.imgur.com/niLR3yx.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/1yowtUg"><img src="https://i.imgur.com/1yowtUg.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/vy5SXtz"><img src="https://i.imgur.com/vy5SXtz.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/rI61WxB"><img src="https://i.imgur.com/rI61WxB.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/NKvUNyH"><img src="https://i.imgur.com/NKvUNyH.png" title="source: imgur.com" /></a>
<br>
<h2>Technologies Used:</h2>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>Javascript</li>
</ul>
<h2>Getting Started:</h2>
<a href="https://mimo217.github.io/around_the_world_tic_tac_toe/">Link</a>
to the tic tac toe browser game.

There are five different rounds of the tic tac toe game, each round is based on the destinations listed. Once the players have competed in one round, they can explore and check out different destinations to continue playing the game.

<h2>Next Steps: Planned future enhancements (icebox items).</h2>

<ul>
<li>Embedding background music</li>
<li>Responsive in mobile</li>
<li>Scoreboard</li>
<li>Randomizer to generate the different destinations instead of manually selecting each one</li>
</ul>
