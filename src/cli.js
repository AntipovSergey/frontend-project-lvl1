import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name?');

const getUserName = () => {
  console.log(`Hello, ${name}!`);
};

export default getUserName;
