import newGame from '../index.js';
import getRandomNubmer from '../randomNumber.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => (number % 2 === 0);

const gameQuestionAnswer = () => {
    const question = getRandomNubmer();
    const answer = isNumberEven(question) ? 'yes' : 'no';
    return [question, answer];
};

const brainEven = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainEven;
