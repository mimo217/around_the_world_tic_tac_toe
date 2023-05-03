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

let roundInfo = `Round + ${roundNum}: ${Player1} + ${Player2}`;
console.log (roundinfo);

let temp = Player1;

Player1 = Player2;
Player2 = temp;

let currentPlayer = Player1;

function takeTurn(cell, row) {
 if gameBoard[cell,row] !== "") {
    showInfo("Lo siento this box has been occupied")
return
}

let currentPlayer = 'Player1'

if "checkWinner === "" {
 console.log(showInfo)
 }else{
console.log(showInfo)
 }
}
