const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const VALID_CHOICES_ABBR = ['r', 'p', 'sc', 'sp', 'l'];
const WINNING_COMBOS = {
  rock: ['lizard', 'scissors'],
  paper: ['spock', 'rock'],
  scissors: ['lizard', 'paper'],
  spock: ['rock', 'scissors'],
  lizard: ['paper', 'spock']
};

const score = {
  player: 0,
  computer: 0,
  reset: function() {
    this.player = 0;
    this.computer = 0;
  }
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    prompt('You win!');
  } else if (WINNING_COMBOS[computerChoice].includes(choice)) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }

  prompt(`Player score: ${score.player}`);
  prompt(`Computer score: ${score.computer}`);
}

function calculateScore(choice, computerChoice) {
  if (WINNING_COMBOS[choice].includes(computerChoice)) {
    score.player += 1;
  } else if (WINNING_COMBOS[computerChoice].includes(choice)) {
    score.computer += 1;
  } else {
    score.player += 1;
    score.computer += 1;
  }
}

while (true) {

  prompt(`Choose one: ${VALID_CHOICES.join(', ')} (${VALID_CHOICES_ABBR.join(', ')})`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice) &&
         !VALID_CHOICES_ABBR.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  if (VALID_CHOICES_ABBR.includes(choice)) {
    let index = VALID_CHOICES_ABBR.indexOf(choice);
    choice = VALID_CHOICES[index];
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  calculateScore(choice, computerChoice);
  displayWinner(choice, computerChoice);

  if (score.player === 5) {
    prompt('The grand winner is: YOU!');
    score.reset();
  } else if (score.computer === 5) {
    prompt(`The grand winner is: COMPUTER!`);
    score.reset();
  }

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  console.clear();

  if (answer[0] !== 'y') break;
}