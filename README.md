# unit-1-project
	Around the World Tic Tac Toe Browser Game
Tic Tac Toe browser game that is "Around the World" themed, there will be 5 rounds with the best of 3 in order to win. Each round is destination based, with different icons as "x" and "o" for each player, inspired by the city.
Set 'roundNum' to 5
Set 'player1' to 'O'
Set 'player2' to 'X'
Set destination for each player’s game piece
Declare gameBoard as a 2D array with 3 rows and 3 columns filled with empty strings 
Set currentPlayer to player1
Set gameIsOngoing to true
Declare ‘player1ImgSrc’ and ‘player2ImgSrc’
Declare function ‘resetGameBoard’ that takes a destination parameter
   Set gameBoard to a 2D array with 3 rows and 3 columns filled with empty strings
Remove Xs and Os from the game board
Reset currentPlayer to ‘player1’
Reset “gameIsOngoing to ‘true’
Reset renderGameBoard()
If ‘destination’ is ‘Paris’, ‘Lima,’ ‘London,’ ‘Cairo,’ ‘Beijing’ set 'player1ImgSrc' to 'dest1O' and 'player2ImgSrc' to 'dest1X'
            Add event listeners to destination buttons
            Set the function ‘removeClickEvent()’
                Get all elements with the ‘cell’ class and store them in ‘cells” array
                For each ‘cell’ in “cells”, remove ‘click’ eventListener
          Set function 'showMessage’
               Get the elements with 'popup-banner', 'popup-message', and 'close-btn' IDs
                Set 'popupMessage' to 'message'
                Set 'popupBanner' to 'block'
          End Function
          Set function ‘displaycell’
            if gameBoard[row][col] is empty
            create ‘img” element with current player
            if ‘currentPlayer’ is player1
             show “player1ImgSrc
             else
              show “player1ImgSrc
          Add ‘img’ to ‘cel’
         Update gameboard
          Check for ‘checkWin()’
          if winner is not null
             “GameIsOngoing” is false
               remove ‘removeClickEvent()
               display ‘showMessage
          else if ‘CheckDraw’
                 “GameIsOngoing” is false
               remove ‘removeClickEvent()
               display ‘showMessage
           else:
               switch to other ‘currentPlayer’
        End function
        Set function renderGameBoard
          get all ‘.cell’ elements
          add .addEventListener to cells in ‘row’ and ‘column’
        End function
       Set function checkWin
         Check if row[0] = row[1] and row[1] is = row[2] and row[0] is not empty
             return row[0]
       Check if [0][col]=[1][col] and [1][col] is = [2][col] and [0][col] is not empty:
            return [0][col]
        if [0][0] = [1][1] and [1][1] = [2][2] and [0][0] is not empty:
          return [0][0]
        else if [0][2] is equal to [1][1] and [1][1] is equal to[2][0] and [0][2] is not empty:
         return [0][2]
        Check if all cells in ‘row’ and ‘column” are displayed
             for each row and cell 
              if cell is empty
               return false otherwise return true
       End function
       Start renderGameboard
       Start resetGameboard

	Screenshot(s): 
 
 
 
 
 


	Technologies Used: 
•	HTML
•	CSS
•	Javascript
	Getting Started: 
https://mimo217.github.io/unit_1_project/

There are five different rounds of the tic tac toe game, each round is based on the destinations listed. Once the players have competed in one round, they can explore and check out different destinations to continue playing the game.

	Next Steps: Planned future enhancements (icebox items).
•	Embedding background music 
•	Make it mobile friendly
•	Randomizer to generate the different destinations instead of manually selecting each one

