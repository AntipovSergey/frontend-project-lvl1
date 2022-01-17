import readlineSync from 'readline-sync';
import { name } from './cli.js';
import getRandomNubmer from './randomNumber.js';

const isNumberEven = () => {
    let result = 0;
    while (result !== 3) {
        const randomNumber = getRandomNubmer();
        const gameQuestion = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".
Question: ${randomNumber} `);
        console.log(`Your answer: ${gameQuestion}`);
        if ((randomNumber % 2 === 0 && gameQuestion === 'yes') || (randomNumber % 2 !== 0 && gameQuestion === 'no')) {
            console.log('Correct!');
            result++;
        } else if (randomNumber % 2 !== 0 && gameQuestion === 'yes') {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${name}!`);
            result = 0;
        } else if (randomNumber % 2 === 0 && gameQuestion === 'no') {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${name}!`);
            result = 0;
        } else if (gameQuestion !== 'yes' || gameQuestion !== 'no') {
            console.log('Correct input should be "yes" or "no"');
            result = 0;
        }
    }
    console.log(`Congratulations, ${name}!`);
};

export default isNumberEven;
