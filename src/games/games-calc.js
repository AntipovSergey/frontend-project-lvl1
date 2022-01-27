import generateGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const generateExpression = (op, a, b) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: '${op}'!`);
  }
};

const gameQuestionAnswer = () => {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const randomOperator = operators[getRandomNumber(0, operators.length)];
  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  const answer = String(generateExpression(randomOperator, firstRandomNumber, secondRandomNumber));
  return [question, answer];
};

const brainGames = () => generateGame(gameRule, gameQuestionAnswer);

export default brainGames;
