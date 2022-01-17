import readlineSync from 'readline-sync';
import { name } from './cli.js';
import getRandomNubmer from './randomNumber.js';

const isNumberEven = () => {
    let result = 0;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    while (result !== 3) {
        const randomNumber = getRandomNubmer();
        console.log(`Question: ${randomNumber}`);
        const gameAnswer = readlineSync.question('Your answer: ');
        if ((randomNumber % 2 === 0 && gameAnswer === 'yes') || (randomNumber % 2 !== 0 && gameAnswer === 'no')) {
            console.log('Correct!');
            result++;
        } else if (randomNumber % 2 !== 0 && gameAnswer === 'yes') {
            return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${name}!`);
        } else if (randomNumber % 2 === 0 && gameAnswer === 'no') {
            return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${name}!`);
        } else if (gameAnswer !== 'yes' || gameAnswer !== 'no') {
            return console.log('Correct input should be "yes" or "no"');
        }
    }
    return console.log(`Congratulations, ${name}!`);
};

export default isNumberEven;
