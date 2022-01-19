import generateGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameQuestion = 'What is the result of the expression?';

const operators = ['+', '*'];
const applyOperator = (op, a, b) => {
  let applyOperatorResult;
  switch (op) {
    case '+':
      applyOperatorResult = a + b;
      break;
    case '*':
      applyOperatorResult = a * b;
      break;
    default:
      break;
  }
  return applyOperatorResult;
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
