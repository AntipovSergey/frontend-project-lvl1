import readlineSync from 'readline-sync';
import { getUserName, name } from './cli.js';

const generateGame = (gameQuestion, gameQuestionAnswer) => {
  let result = 0;
  const attempts = 3;
  getUserName();
  console.log(gameQuestion);

  while (result !== attempts) {
    const [question, answer] = gameQuestionAnswer();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === answer) {
      console.log('Correct');
      result += 1;
    } else {
      return console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.
Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default generateGame;
