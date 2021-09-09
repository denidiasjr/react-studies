type Input = number | string;

function combine(input1: Input, input2: Input) {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  }

  return `${input1}${input2}`;
}

console.log(combine(30, 21));
console.log(combine('Deni', 'lson'));