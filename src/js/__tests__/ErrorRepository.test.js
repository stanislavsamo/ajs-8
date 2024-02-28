import showMap, { ErrorRepository } from '../ErrorRepository';

test('should return "Unknown error" for unknown code', () => {
  expect(new ErrorRepository().translate(5)).toBe('Unknown error');
});

test('should return "Not Found" for code 404', () => {
  expect(
    new ErrorRepository(
      [400, 'Bad Request'],
      [403, 'Bad Forbidden'],
      [404, 'Not Found'],
    ).translate(404),
  ).toBe('Not Found');
});

test('should show "Bad Forbidden" for code 403', () => {
  expect(showMap(403)).toBe('Bad Forbidden');
});
