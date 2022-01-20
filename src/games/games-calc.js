import generateGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameQuestion = 'What is the result of the expression?';

const operators = ['+', '*'];
const applyOperator = (op, a, b) => {
  switch (op) {
    case '+':
      return a + b;
    case '*':
      return a * b;
    default:
      break;
  }

  return null;
};

const gameQuestionAnswer = () => {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const randomOperator = operators[getRandomNumber(0, operators.length)];
  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  const answer = String(applyOperator(randomOperator, firstRandomNumber, secondRandomNumber));
  return [question, answer];
};

const brainGames = () => generateGame(gameQuestion, gameQuestionAnswer);

export default brainGames;
