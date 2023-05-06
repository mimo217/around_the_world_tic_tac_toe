/* ---- constants ----*/
const roundLimit = 5;
const Player1 = 'O';
const Player2 = 'X';

/* ---- state variables ----*/
  let gameBoard = [
    [", ", "]
    [", ", "]
    [", ", "]
  ];
  let roundNum = 1;
  let currenPlayer = Player1;
//}

/* ---- function ---- */

//let roundInfo = `Round ${roundNum}: ${Player1} + ${Player2}`;
//console.log(roundInfo);

//let temp = Player1;
//Player1 = Player2;
//Player2 = temp;

//currentPlayer = Player1;


function takeTurn(cell, row) {
 if (gameBoard[cell,row] !== "") {
    showInfo('this box is taken!');
    return;
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

 let player1Btn = document.getElementById('Player1');
 let player2Btn = document.getElementById('Player2');

player1Btn.addEventListener('click', function()) {
    currentPlayer = Player1;
    player1Btn.innerText = Player1;
    player2Btn.innerText = "";
}

player2Btn.addEventListener('click', function()) array.forEach(element => {
    currentPlayer = Player2;
    player2Btn.innerText = Player2;
    player1Btn.innerText = "";
});
 
 function newRound() {
}
 