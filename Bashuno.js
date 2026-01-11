const readline = require('readline');
const colors = ['red', 'yellow', 'blue', 'green'];
const numbers = [...Array(10).keys()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Welcome to UNO! Press Enter to start...', () => {
  console.log('Game starting...');
  rl.close();
  createdeck();
});

