
let userInput: unknown;

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
  // while (true) {}
}

console.log(generateError('Service unavailable', 500));