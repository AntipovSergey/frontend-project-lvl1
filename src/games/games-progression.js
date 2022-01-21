import generateGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameQuestion = 'What number is missing in the progression?';
const step = getRandomNumber(2, 5);
const firstNumber = getRandomNumber(1, 10);

const generateArithmeticProgression = (init, move) => {
  const result = [];

  for (let i = 0; i < 10 * move; i += move) {
    result.push(init + i);
  }

  return result;
};

const createGameArray = (arr) => {
  const randomElement = arr.splice(getRandomNumber(0, arr.length - 1), 1, '..');
  return [arr, randomElement];
};

const gameQuestionAnswer = () => {
  const [arr, randomElement] = createGameArray(generateArithmeticProgression(firstNumber, step));
  const question = arr.join(' ');
  const answer = String(randomElement);
  return [question, answer];
};

const brainProgression = () => generateGame(gameQuestion, gameQuestionAnswer);

export default brainProgression;
