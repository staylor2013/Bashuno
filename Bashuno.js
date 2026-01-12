const readline = require('readline');
const colors = ['red', 'yellow', 'blue', 'green'];
const numbers = [...Array(10).keys()];
const specials = ['+2', 'reverse', 'block'];
const deck = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Welcome to UNO! Press Enter to start...', () => {
  console.log('Game starting...');
  rl.close();
  createdeck();
});

function createdeck() {
  for(let color in colors){
    for(let number in numbers){
      deck.push({color, type: Number, value: number});
      deck.push({color, type: Number, value: number});
    }
  }
    for(let special in specials){
      deck.push({color, type:special});
      deck.push({color, type:special});
    }
    for (let i = 0; i < 4; i++;){o
      deck.push({color: 'wild', tupe: 'wild'});
      deck.push({color: 'wild', type: '+4'});
    }
    deck.push({color: 'wild', type:'shuffle'});

  for (let i = deck.length - 1; i > 0, i--){
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}
function dealcards(array=deck){
  
}
