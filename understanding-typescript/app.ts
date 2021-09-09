function throwError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}
console.log(throwError('Service unavailable', 500));
