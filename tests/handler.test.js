import { readFileSync } from 'fs';
import { handle } from '../src/handler';

const loadData = () => {
  const data = readFileSync('tests/json/input.json')
    .toString()
    .trim();
  const expected = readFileSync('tests/json/output.json')
    .toString()
    .trim();
  return { data, expected };
};

const setOptions = (indentation = 2) => ({
  indentation
})

test('handler should return a correct configuration', () => {
  const { data, expected } = loadData();
  const options = setOptions();
  const result = handle(data, options);
  expect(result).toEqual(expected);
});

test('handler should return configuration with different indentation than expected', () => {
  const { data, expected } = loadData();
  const options = setOptions(4);
  const result = handle(data, options);
  expect(result).not.toEqual(expected);
});
