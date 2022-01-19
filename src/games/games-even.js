import generateGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => (number % 2 === 0);

const gameQuestionAnswer = () => {
  const question = getRandomNumber();
  const answer = isNumberEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainEven = () => generateGame(gameQuestion, gameQuestionAnswer);

export default brainEven;
