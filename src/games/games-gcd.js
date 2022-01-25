import generateGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  let result;
  for (let i = a; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      result = i;
      break;
    }
  }

  return result;
};

const gameQuestionAnswer = () => {
  const firstRandomNumber = getRandomNumber();
  const secondRandomNumber = getRandomNumber();
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const answer = String(getGcd(firstRandomNumber, secondRandomNumber));
  return [question, answer];
};

const brainGcd = () => generateGame(gameQuestion, gameQuestionAnswer);

export default brainGcd;
