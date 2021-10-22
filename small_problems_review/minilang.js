//INPUT:  STRING
//OUTPUT:  Number if PRINT command is used
//DATA STRUCTURE:  Array for stack, switch statement, variable for regsister
//REQS:  All are integer

// eslint-disable-next-line max-lines-per-function
function minilang(program) {
  const stack = [];
  let register = 0;

  let commands = program.split(' ');

  // eslint-disable-next-line max-lines-per-function
  commands.forEach(command => {
    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register  /= stack.pop();
        break;
      case 'REMANDER':
        register  %= stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(command);
        break;
    }
  });

}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)