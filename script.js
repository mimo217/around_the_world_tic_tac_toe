/* ---- constants ----*/
const roundLimit = 5;
const player1 = 'O';
const player2 = 'X';
const player1Btn = document.getElementById('player1');
const player2Btn = document.getElementById('player2');

/* ---- state variables ----*/
const gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];
let currentPlayer = player1;
//}

/*--- event listeners ----*/
document.getElementById('gameboard').addEventListener('click', handleMove);

player1Btn.addEventListener('click', function () {
  currentPlayer = player1;
  player1Btn.innerText = player1;
  player2Btn.innerText = player2;
});

player2Btn.addEventListener('click', function () {
  currentPlayer = player2;
  player2Btn.innerText = player2;
  player1Btn.innerText = player1;
});

/* ---- function ---- */
function renderGameBoard() {
  let cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    const row = cell.dataset.row;
    const column = cell.dataset.cell;
    cell.innerText = gameBoard[row][column];
  });
}

function handleMove(event) {
  let cell = event.target.dataset.cell;
  let row = event.target.dataset.row;
  if (gameBoard[row][cell] !== "") {
    showInfo('this box is taken!');
    return;
  }

gameBoard[row][cell] = currentPlayer;
event.target.innerText = currentPlayer;

  if (checkWinner()) {
    showInfo(`${currentPlayer} wins!`);
  } else if (gameIsTied()) {
    showInfo("It's a draw!")
  } else {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }
}

function showInfo(message) {
  let info = document.getElementById('info');
  info.innerText = message;
}

//check winning combinations
function checkWinner() {
  //check horizontal
  for (let i = 0; i < 3; i++) {
    if (gameBoard[i][0] === currentPlayer && gameBoard[i][1] === currentPlayer && gameBoard[i][2] === currentPlayer) {
      return true;
    }
  }

  //check vertical
  for (let i = 0; i < 3; i++) {
    if (gameBoard[0][i] === currentPlayer && gameBoard[1][i] === currentPlayer && gameBoard[2][i] === currentPlayer) {
      return true;
    }
  }
  //check diagonals
  if (gameBoard[0][0] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][2] === currentPlayer) {
    return true;
  }

  if (gameBoard[0][2] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][0] === currentPlayer) {
    return true;
  }
}

function gameIsTied() {
    for (let row = 0; row < gameBoard.length; row++) {
      for (let cell = 0; cell < gameBoard[row].length; cell++) {
        if (gameBoard[row][cell] === '') {
          return false;
        }
      }
    }
    return true;
  }
