function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(result: number) : void {
  console.log('Result:', result);
}

function addAndHandle(n1: number, n2: number, cb: (result: number) => void) : void {
  return cb(n1 + n2);
}

addAndHandle(2, 5, (result) => {
  return result;
})