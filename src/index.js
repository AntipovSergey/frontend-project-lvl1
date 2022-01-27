import readlineSync from 'readline-sync';

const attempts = 3;

const generateGame = (gameRule, gameQuestionAnswer) => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(gameRule);

  for (let i = 0; i < attempts; i += 1) {
    const [question, answer] = gameQuestionAnswer();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    if (yourAnswer === answer) {
      console.log('Correct');
    } else {
      return console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default generateGame;
