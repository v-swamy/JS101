let readline = require('readline-sync');

const SUITS = {H: 'Hearts', D: 'Diamonds', C: 'Clubs', S: 'Spades'};
const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
const FACE_VALUES = {
  Jack: 10,
  Queen: 10,
  King: 10,
  Ace: 1,
};
const MATCH_WINS_NEEDED = 5;
const MAX_VALUE = 21;
const DEALER_HITS = 17;

function prompt(message) {
  console.log(`${message}`);
}

function createDeck() {
  let deck = [];
  for (let suit in SUITS) {
    CARD_VALUES.forEach(card => deck.push([suit, card]));
  }
  shuffle(deck);
  return deck;
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
}

function deal(playerHand, dealerHand, deck) {
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());
}

function hit(hand, deck) {
  hand.push(deck.pop());
}

function calculateTotals(hand) {
  let cardValues = hand.map(card => card[1]);
  let totals = [];
  let total = cardValues.reduce((accum, val) => {
    if (Object.keys(FACE_VALUES).includes(val)) {
      return accum + FACE_VALUES[val];
    } else {
      return accum + val;
    }
  }, 0);
  totals.push(total);
  if (cardValues.includes('Ace')) {
    totals.push(totals[0] + 10);
  }
  return totals;
}

function calculateHand(hand) {
  let totals = calculateTotals(hand);
  let filteredTotals = totals.filter(val => val <= MAX_VALUE);
  if (!filteredTotals.length) {
    return null;
  } else if (filteredTotals.length === 1) {
    return filteredTotals[0];
  } else {
    filteredTotals.sort((a, b) => a - b);
    return filteredTotals[1];
  }
}

function busted(total) {
  return total === null;
  // if (calculateHand(hand)) {
  //   return false;
  // } else {
  //   return true;
  // }
}

function displayCard(card) {
  let [suit, value] = card;
  console.log(`    ${value} of ${SUITS[suit]}`);
}

function displayHands(playerHand, dealerHand, displayAll = true) {
  prompt("Player's hand:");
  playerHand.forEach(card => displayCard(card));
  console.log('');
  prompt("Dealer's hand:");
  if (displayAll) {
    dealerHand.forEach(card => displayCard(card));
  } else {
    displayCard(dealerHand[0]);
    console.log('    ?????');
  }
  console.log('');

}

function displayScore(playerTotal, dealerTotal) {
  prompt(`You have ${playerTotal}, dealer has ${dealerTotal}.`);
}

function declareWinner(playerTotal, dealerTotal) {
  if (busted(playerTotal)) {
    prompt('You busted! Dealer wins!');
  } else if (busted(dealerTotal)) {
    prompt('Dealer busted! You win!');
  } else if (playerTotal > dealerTotal) {
    displayScore(playerTotal, dealerTotal);
    prompt('You win!');
  } else if (playerTotal < dealerTotal) {
    displayScore(playerTotal, dealerTotal);
    prompt('Dealer wins.');
  } else {
    displayScore(playerTotal, dealerTotal);
    prompt("It's a tie!");
  }
}

function playAgain() {
  console.log('-----------------------------------');
  prompt('Do you want to play again? (y or n)');
  let answer = readline.question();
  while (!['y', 'n'].includes(answer)) {
    prompt("Sorry, invalid response.  Please enter 'y' or 'n'.");
    answer = readline.question();
  }
  return answer[0].toLowerCase() === 'y';
}

function initializeScore() {
  let score = {
    Player: 0,
    Dealer: 0,

    reset() {
      this.Player = 0;
      this.Dealer = 0;
    },

    display() {
      prompt(`Score: Player ${this.Player}, Dealer ${this.Dealer}`);
    },

    total() {
      return this.Player + this.Dealer;
    }
  };
  return score;
}

let score = initializeScore();

function updateScore(playerTotal, dealerTotal) {
  if (busted(dealerTotal) || playerTotal > dealerTotal) {
    score.Player += 1;
  } else if (busted(playerTotal) || dealerTotal > playerTotal) {
    score.Dealer += 1;
  } else {
    score.Player += 1;
    score.Dealer += 1;
  }
}

console.clear();

prompt(`Welcome to ${MAX_VALUE}!`);

while (true) {
  let deck = createDeck();

  let playerHand = [];
  let dealerHand = [];
  deal(playerHand, dealerHand, deck);

  displayHands(playerHand, dealerHand, false);

  let playerTotal;

  while (true) {
    playerTotal = calculateHand(playerHand);
    if (busted(playerTotal)) break;
    console.log('------------------');
    prompt('Hit or stay? (h/s)');
    let answer = readline.question()[0].toLowerCase();
    while (!['h', 's'].includes(answer)) {
      prompt("Sorry, invalid response.  Please enter 'h' or 's'.");
      answer = readline.question()[0].toLowerCase();
    }
    if (answer === 's') {
      console.clear();
      break;
    } else {
      hit(playerHand, deck);
      console.clear();
      displayHands(playerHand, dealerHand, false);
    }
  }

  let dealerTotal = calculateHand(dealerHand);

  if (!busted(playerTotal) && !busted(dealerTotal)) {
    while (dealerTotal < DEALER_HITS && !busted(dealerTotal)) {
      hit(dealerHand, deck);
      dealerTotal = calculateHand(dealerHand);
    }
    prompt("You chose to stay. After dealer's turn...\n");
    displayHands(playerHand, dealerHand, true);
  }

  declareWinner(playerTotal, dealerTotal);
  updateScore(playerTotal, dealerTotal);
  score.display();

  if (score.total() === MATCH_WINS_NEEDED * 2) {
    prompt('The match is a tie!');
    score.reset();
  } else if (score.Player === MATCH_WINS_NEEDED) {
    prompt(`Player wins the match!`);
    score.reset();
  } else if (score.Dealer === MATCH_WINS_NEEDED) {
    prompt('Dealer wins the match!');
    score.reset();
  }

  if (!playAgain()) break;

  console.clear();
}

prompt('Thanks for playing 21!');

