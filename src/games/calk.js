/* eslint-disable no-restricted-globals */
import readlineSync from 'readline-sync';

export const rule = 'What is the result of the expression?';
const getRandomExpression = () => {
  const operands = ['+', '-', '*'];
  const firstNum = Math.floor(Math.random() * 11);
  const secondNum = Math.floor(Math.random() * 11);
  const randomeOperand = operands[Math.floor(Math.random() * operands.length)];

  let expression = '';
  let rightAnswer = 0;

  switch (randomeOperand) {
    case '-':
      expression = (`${firstNum} - ${secondNum}`);
      rightAnswer = (firstNum - secondNum);
      break;
    case '+':
      expression = (`${firstNum} + ${secondNum}`);
      rightAnswer = (firstNum + secondNum);
      break;
    case '*':
      expression = (`${firstNum} * ${secondNum}`);
      rightAnswer = (firstNum * secondNum);
      break;
    default:
  }

  const arrWithExpressionAndRightAnswer = [];
  arrWithExpressionAndRightAnswer.push(expression, rightAnswer);

  return arrWithExpressionAndRightAnswer;
};

export const askQuestion = () => {
  const [expression, rightAnswer] = getRandomExpression();
  const answers = [];
  const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);

  if (!isNaN(Number(userAnswer))) {
    answers.push(Number(userAnswer), rightAnswer);
  } else {
    answers.push(userAnswer, rightAnswer);
  }

  return answers;
};
