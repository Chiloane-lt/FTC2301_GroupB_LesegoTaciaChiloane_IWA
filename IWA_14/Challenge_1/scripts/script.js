const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
};

function john() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
};

john();

// To be honest, all I did was fix syntax error. Nothing else. 