import generateGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'What number is missing in the progression?';

const generateArithmeticProgression = (init, move, length) => {
  const result = [];

  for (let i = 0; i <= length; i += 1) {
    result.push(init + (i * move));
  }

  return result;
};

const createGameArray = (arr, item) => {
  const arrCopy = [...arr];
  const randomElementIndex = item;
  const randomElement = arrCopy[randomElementIndex];
  arrCopy[randomElementIndex] = '..';
  return [arrCopy.join(' '), randomElement];
};

const gameQuestionAnswer = () => {
  const step = getRandomNumber(2, 10);
  const firstNumber = getRandomNumber(1, 10);
  const length = getRandomNumber(5);
  const gameArray = generateArithmeticProgression(firstNumber, step, length);
  const randomNumber = getRandomNumber(1, gameArray.length);
  const [question, hiddenElement] = createGameArray(gameArray, randomNumber);
  return [question, String(hiddenElement)];
};

const brainProgression = () => generateGame(gameRule, gameQuestionAnswer);

export default brainProgression;
