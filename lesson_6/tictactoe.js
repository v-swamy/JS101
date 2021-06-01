let readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GOES_FIRST = 'computer';
const MATCH_WINS_NEEDED = 2;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function prompt(message) {
  console.log(`==> ${message}`);
}

function joinOr(array, delimiter = ', ', word = 'or') {
  switch (array.length) {
    case 0:
      return '';
    case 1:
      return `${array[0]}`;
    case 2:
      return array.join(` ${word} `);
    default:
      return array.slice(0, -1).join(delimiter) +
          `${delimiter}${word} ${array.slice(-1)}`;
  }
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function initializeScore() {
  let score = {
    Player: 0,
    Computer: 0,

    reset() {
      this.Player = 0;
      this.Computer = 0;
    },

    display() {
      prompt(`Score: Player ${this.Player}, Computer ${this.Computer}`);
    },

    total() {
      return this.Player + this.Computer;
    }
  };
  return score;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  if (winExists(board)) {
    board[findWin(board)] = COMPUTER_MARKER;
  } else if (threatExists(board)) {
    board[findThreat(board)] = COMPUTER_MARKER;
  } else if (board[5] === INITIAL_MARKER) {
    board[5] = COMPUTER_MARKER;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(player) {
  return player === 'player' ? 'computer' : 'player';
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function findThreat(board) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let humanMarkers = 0;
    let openSquare = null;
    WINNING_LINES[line].forEach(square => {
      if (board[square] === HUMAN_MARKER) {
        humanMarkers += 1;
      } else if (board[square] === INITIAL_MARKER) {
        openSquare = square;
      }
    });
    if (humanMarkers === 2 && openSquare) {
      return openSquare;
    }
  }

  return null;
}

function findWin(board) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let computerMarkers = 0;
    let openSquare = null;
    WINNING_LINES[line].forEach(square => {
      if (board[square] === COMPUTER_MARKER) {
        computerMarkers += 1;
      } else if (board[square] === INITIAL_MARKER) {
        openSquare = square;
      }
    });
    if (computerMarkers === 2 && openSquare) {
      return openSquare;
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function threatExists(board) {
  return !!findThreat(board);
}

function winExists(board) {
  return !!findWin(board);
}

let score = initializeScore();

while (true) {
  let board = initializeBoard();
  let currentPlayer;
  if (GOES_FIRST === 'choose') {
    prompt('Who goes first? (P)layer or (C)omputer.)');
    let answer = readline.question().toLowerCase()[0];
    if (answer === 'p') {
      currentPlayer = 'player';
    } else {
      currentPlayer = 'computer';
    }
  } else {
    currentPlayer = GOES_FIRST;
  }

  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
    score[detectWinner(board)] += 1;
  } else {
    prompt("It's a tie!");
    score.Computer += 1;
    score.Player += 1;
  }

  score.display();

  if (score.total() === MATCH_WINS_NEEDED * 2) {
    prompt('The match is a tie!');
    score.reset();
  } else if (score.Player === MATCH_WINS_NEEDED ||
    score.Computer === MATCH_WINS_NEEDED) {
    prompt(`${detectWinner(board)} wins the match!`);
    score.reset();
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase();
  while (answer !== 'y' && answer !== 'n') {
    prompt("Invalid input!  Please press 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');

