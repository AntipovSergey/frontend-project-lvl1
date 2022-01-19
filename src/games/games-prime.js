import generateGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  let temp = 0;
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      temp += 1;
    }
  }

  if (temp === 2) {
    return true;
  }

  return false;
};

const gameQuestionAnswer = () => {
  const question = getRandomNumber(2, 20);
  const answer = isNumberPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrime = () => generateGame(gameQuestion, gameQuestionAnswer);

export default brainPrime;
