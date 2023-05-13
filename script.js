const roundLimit = 5;
const player1 = 'O';
const player2 = 'X';
const dest1X = 'https://i.imgur.com/JwWuqqM.jpg';
const dest1O = 'https://i.imgur.com/8aunzUM.jpg';
const dest2X = 'https://i.imgur.com/ijElqHy.png';
const dest2O = 'https://i.imgur.com/r2S5Hl4.jpg';
const dest3X = 'https://i.imgur.com/mRmeJ1m.png';
const dest3O = 'https://i.imgur.com/rjcSSP6.png';
const dest4X = 'https://i.imgur.com/RIiikxh.jpg';
const dest4O = 'https://i.imgur.com/ezki4a4.png';

/* ---- state variables ----*/
let gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let currentPlayer = player1;
let gameIsOngoing = true;
let player1ImgSrc = '';
let player2ImgSrc = '';


function resetGameBoard(destination) {
  //reset the game board
  gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  //remove Xs and Os from gameboard
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.innerText = ""
  });

  //reset the other state variables
  currentPlayer = player1;
  gameIsOngoing = true;
  renderGameBoard();

  //Set img sources for game pieces
  if (destination === 'Paris') {
    player1ImgSrc = 'https://i.imgur.com/JwWuqqM.jpg'
    player2ImgSrc = 'https://i.imgur.com/8aunzUM.jpg'
  }
  if (destination === 'Lima') {
    player1ImgSrc = 'https://i.imgur.com/ijElqHy.png'
    player2ImgSrc = 'https://i.imgur.com/r2S5Hl4.jpg'
  }
  if (destination === 'London') {
    player1ImgSrc = 'https://i.imgur.com/mRmeJ1m.png'
    player2ImgSrc = 'https://i.imgur.com/rjcSSP6.png'
  }
  if (destination === 'Cairo') {
    player1ImgSrc = 'https://i.imgur.com/JJ81PPR.jpg'
    player2ImgSrc = 'https://i.imgur.com/GkUxQrE.jpg'
  }
  if (destination === 'Beijing') {
    player1ImgSrc = 'https://i.imgur.com/RIiikxh.jpg'
    player2ImgSrc = 'https://i.imgur.com/ezki4a4.png'
  }


}

/*--- event listeners ----*/
document.getElementById('player1').addEventListener('click', function () {
  currentPlayer = player1;
  document.querySelector('.current-player').innerText = 'O';
});
document.getElementById('player2').addEventListener('click', function () {
  currentPlayer = player2;
  document.querySelector('.current-player').innerText = 'X';
});
document.getElementById('dest1').addEventListener('click', function () {
  resetGameBoard('Paris');
});
document.getElementById('dest2').addEventListener('click', function () {
  resetGameBoard('Lima');
});
document.getElementById('dest3').addEventListener('click', function () {
  resetGameBoard('London');
});
document.getElementById('dest4').addEventListener('click', function () {
  resetGameBoard('Cairo');
});
document.getElementById('dest5').addEventListener('click', function () {
  resetGameBoard('Beijing');
});


// /* ---- function ---- */
function removeClickEvent() {
  const cells = [...document.querySelectorAll('.cell')];

  cells.forEach((cell) => {
    cell.removeEventListener('click', displayCell);
    console.log(cell)
  });
}

// display popup banner to indicate winner and draw

function showMessage(message) {
  const popupBanner = document.getElementById('popup-banner');
  const popupMessage = document.getElementById('popup-message');
  const closeBtn = document.getElementById('close-btn');

  popupMessage.textContent = message;
  popupBanner.style.display = 'block';
  closeBtn.onclick = function() {
    popupBanner.style.display = 'none';
  }
}
function displayCell(row, col, cell) {
  console.log(row, col, gameBoard[row][col])

  if (gameBoard[row][col] === '') {
    const img = document.createElement('img');
    img.src = currentPlayer === player1 ? player1ImgSrc : player2ImgSrc
    cell.innerHTML = '';
    cell.appendChild(img);
    gameBoard[row][col] = currentPlayer;


    const winner = checkWin();
    //check for a winners
    if (winner !== null) {
      gameIsOngoing = false;
      removeClickEvent();
      showMessage(`Passenger ${currentPlayer === player1 ? '1' : '2'} wins!`);
      // check for a tie
    } else if (checkDraw()) {
      gameIsOngoing = false;
      removeClickEvent();
      showMessage('A draw won\'t stop us. Let\'s keep exploring!');
    } else {
      //change player
      currentPlayer = (currentPlayer == 'O') ? 'X' : 'O';
    }
  }
}


//Render the game board
function renderGameBoard() {
  const cells = [...document.querySelectorAll('.cell')];

  cells.forEach((cell) => {
    const row = cell.dataset.row;
    const col = cell.dataset.column;
    cell.addEventListener('click', () => displayCell(row, col, cell));
  });
}

function checkWin() {
  //check horizontals
  for (let row = 0; row < gameBoard.length; row++) {
    if (gameBoard[row][0] === gameBoard[row][1] && gameBoard[row][1] === gameBoard[row][2] && gameBoard[row][0] !== '') {
      return gameBoard[row][0];
    }
  }

  //check verticals
  for (let col = 0; col < gameBoard.length; col++) {
    if (gameBoard[0][col] === gameBoard[1][col] && gameBoard[1][col] === gameBoard[2][col] && gameBoard[0][col] !== '') {
      return gameBoard[0][col];
    }
  }

  //check diagonals
  for (let cell = 0; cell < gameBoard.length; cell++) {
    if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] && gameBoard[0][0] !== '') {
      return gameBoard[0][0];
    }
    if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0] && gameBoard[0][2] !== '') {
      return gameBoard[0][2];
    }

    return null;
  }
}


function checkDraw() {
  //check if all cells are populated
  for (let row = 0; row < gameBoard.length; row++) {
    for (let col = 0; col < gameBoard.length; col++) {
      if (gameBoard[row][col] === '') {
        return false;
      }
    }
  }

  return true;
}

renderGameBoard();
resetGameBoard('Paris');