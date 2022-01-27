import generateGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  for (let i = firstNumber; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      return i;
    }
  }

  return firstNumber;
};

const gameQuestionAnswer = () => {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const answer = String(getGcd(firstRandomNumber, secondRandomNumber));
  return [question, answer];
};

const brainGcd = () => generateGame(gameRule, gameQuestionAnswer);

export default brainGcd;
