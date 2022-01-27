import generateGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  if (number === 0 || number === 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 || i === 0 || i === 1) {
      return false;
    }
  }

  return true;
};

const gameQuestionAnswer = () => {
  const question = getRandomNumber(2, 20);
  const answer = isNumberPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrime = () => generateGame(gameQuestion, gameQuestionAnswer);

export default brainPrime;
