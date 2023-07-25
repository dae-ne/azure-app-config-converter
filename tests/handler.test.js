import { readFileSync } from 'fs';
import { handle } from '../src/handler';

const loadData = (isFunctionApp = false) => {
  const data = readFileSync('tests/json/input.json')
    .toString()
    .trim();
  const expected = readFileSync(`tests/json/output${isFunctionApp ? '-functionapp' : ''}.json`)
    .toString()
    .trim();
  return { data, expected };
};

const setOptions = (indentation = 2, type = 'default') => ({
  indentation,
  type
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

test('handler should return a correct functionapp configuration', () => {
  const { data, expected } = loadData(true);
  const options = setOptions(2, 'functionapp');
  const result = handle(data, options);
  expect(result).toEqual(expected);
});
