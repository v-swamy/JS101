function transactionsFor(id, transactions) {
  return transactions.filter(transObj => transObj.id === id);
}

function isItemAvailable(id, transactions) {
  let filteredTransactions = transactionsFor(id, transactions);
  let qty = 0;
  filteredTransactions.forEach(transObj => {
    if (transObj.movement === 'in') {
      qty += transObj.quantity;
    } else {
      qty -= transObj.quantity;
    }
  });
  return qty > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true