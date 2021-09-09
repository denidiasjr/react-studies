function sum(num1: number, num2: number, showResult: boolean, resultPhrase: string) {
  const result = num1 + num2;
  
  if (showResult) {
    console.log(`${resultPhrase} ${result}`);
  }

  return result;
}

const number1: number = 2;
const number2: number = 5;
const showResult: boolean = true;
const resultPhrase: string = 'The result is';

sum(number1, number2, showResult, resultPhrase);