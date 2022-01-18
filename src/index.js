import readlineSync from 'readline-sync';
import { getUserName, name } from './cli.js';

const generateGame = (gameQuestion, gameQuestionAnswer) => {
    let result = 0;
    getUserName();
    console.log(gameQuestion);

    while (result !== 3) {
        const [question, answer] = gameQuestionAnswer();
        console.log(`Question: ${question}`);
        const yourAnswer = readlineSync.question('Your answer: ');
        if (yourAnswer === answer) {
            console.log('Correct');
            result++;
        } else {
            return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${name}!`);
        }
    }
    return console.log(`Congratulations, ${name}!`);
};

export default generateGame;
