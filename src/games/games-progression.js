import generateGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameQuestion = 'What number is missing in the progression?';

const generateArithmeticProgression = (init, move, length) => {
  const result = [];

  for (let i = 0; i <= length; i += 1) {
    result.push(init + (i * move));
  }

  return result;
};

const createGameArray = (arr, item) => {
  const randomArr = [...arr];
  const randomElementIndex = item;
  const randomElement = randomArr[randomElementIndex];
  randomArr[randomElementIndex] = '..';
  return [randomArr.join(' '), randomElement];
};

const gameQuestionAnswer = () => {
  const step = getRandomNumber(2, 10);
  const firstNumber = getRandomNumber(1, 10);
  const length = getRandomNumber(5);
  const gameArray = generateArithmeticProgression(firstNumber, step, length);
  const randomNumber = getRandomNumber(1, gameArray.length);
  const [arithmeticProgression, hiddenElement] = createGameArray(gameArray, randomNumber);
  const question = arithmeticProgression;
  const answer = String(hiddenElement);
  return [question, answer];
};

const brainProgression = () => generateGame(gameQuestion, gameQuestionAnswer);

export default brainProgression;
