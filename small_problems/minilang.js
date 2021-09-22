// eslint-disable-next-line max-lines-per-function
function minilang(string) {
  let commands = string.split(' ');
  let register = 0;
  let stack = [];

  commands.forEach(command => {
    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        if (isNaN(register)) {
          return 'Empty Stack Error!!!';
        }
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register = Match.floor(register % stack.pop());
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(command);
    }
  });
}