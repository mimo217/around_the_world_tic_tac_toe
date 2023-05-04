let roundNum = 1;
let Player1 = 'O';
let PLayer2 = 'X';

function resetGameBoard () {
  let gameBoard = [
    [", ", "]
    [", ", "]
    [", ", "]
  ];
}

let roundInfo = `Round ${roundNum}: ${Player1} + ${Player2}`;
console.log(roundInfo);

let temp = Player1;
Player1 = Player2;
Player2 = temp;

currentPlayer = Player1;

function takeTurn(cell, row) {
 if (gameBoard[cell,row] !== "") {
    showInfo('Lo siento this box has been occupied')
    return;
    console.log(showInfo);
 }
}

gameBoard[cell][row] = currentPlayer;

if (checkWinner()) {
  showInfo(currentPlayer + ' wins!');
 } else if (gameIsTied()) {
  showInfo("It's a draw!")
  return;
  console.log(showInfo)
 }


 function newRound() {
}
 