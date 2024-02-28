export class ErrorRepository {
  constructor(...args) {
    this.errorsMap = new Map(args);
  }

  translate(code) {
    if (this.errorsMap.has(code)) {
      return this.errorsMap.get(code);
    }

    return 'Unknown error';
  }
}

export default function showMap(code) {
  const errors = new ErrorRepository(
    [400, 'Bad Request'],
    [403, 'Bad Forbidden'],
    [404, 'Not Found'],
  );

  return errors.translate(code);
}
