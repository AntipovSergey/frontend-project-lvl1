import _ from 'lodash';
import generateGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const getDivisors = (number) => {
    const result = [];
    for (let i = number; i >= 1; i--) {
        if (number % i === 0) {
            result.push(i);
        }
    }

    return result.sort((a, b) => a - b);
};

const getGcd = (arr1, arr2) => {
    const firstArray = getDivisors(arr1);
    const secondArray = getDivisors(arr2);
    const intersection = _.intersection(firstArray, secondArray);
    return intersection.sort((a, b) => a - b)[intersection.length - 1];
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
