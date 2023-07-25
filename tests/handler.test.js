import { readFileSync } from 'fs';
import { handle } from '../src/handler';

test('handler should return a correct value', () => {
  const data = readFileSync('tests/json/input.json').toString();
  const expected = readFileSync('tests/json/output.json').toString();
  const options = { indentation: 2 };
  const result = handle(data, options);
  expect(result.trim()).toEqual(expected.trim());
});
