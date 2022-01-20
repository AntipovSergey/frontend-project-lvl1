import generateGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameQuestion = 'What number is missing in the progression?';

const generateArithmeticProgression = () => {
  const result = [];
  const step = getRandomNumber(2, 5);
  const firstNumber = getRandomNumber(1, 10);
  let temp = 0;

  for (let i = 0; i <= 10; i += 1) {
    temp += firstNumber + step;
    result.push(temp);
  }

  return result;
};

const createArrayWithCoveredElem = (arr) => {
  const randomElement = arr.splice(getRandomNumber(0, arr.length), 1, '..');
  return [arr, randomElement];
};

const gameQuestionAnswer = () => {
  const [arr, randomElement] = createArrayWithCoveredElem(generateArithmeticProgression());
  const question = arr.join(' ');
  const answer = String(randomElement);
  return [question, answer];
};

const brainProgression = () => generateGame(gameQuestion, gameQuestionAnswer);

export default brainProgression;
