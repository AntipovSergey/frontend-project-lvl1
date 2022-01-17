import readlineSync from 'readline-sync';
import { name } from './cli.js';
import getRandomNubmer from './randomNumber.js';

const calculateRandomExpression = () => {
    let result = 0;
    const operators = ['+', '*'];
    const applyOperator = (op, a, b) => {
        let applyOperatorResult;
        switch (op) {
        case '+':
            applyOperatorResult = a + b;
            break;
        case '*':
            applyOperatorResult = a * b;
            break;
        default:
            break;
        }
        return applyOperatorResult;
    };
    console.log('What is the result of the expression?');
    while (result !== 3) {
        const firstRandomNumber = getRandomNubmer();
        const secondRandomNumber = getRandomNubmer();
        const randomOperator = operators[getRandomNubmer(0, operators.length)];
        const gameConditionExpression = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
        const gamePuprose = applyOperator(randomOperator, firstRandomNumber, secondRandomNumber);
        console.log(`Question: ${gameConditionExpression}`);
        const gameAnswer = readlineSync.question('Your answer: ');
        if (Number(gameAnswer) === gamePuprose) {
            console.log('Correct!');
            result++;
        } else {
            return console.log(`${gameAnswer} is wrong answer ;(. Correct answer was ${gamePuprose}.
Let's try again, ${name}!`);
        }
    }
    return console.log(`Congratulations, ${name}!`);
};

export default calculateRandomExpression;
