import { readFileSync } from 'fs';
import { convert } from '../src/converter';

const loadData = (outputFilePostfix = '') => {
  const data = readFileSync('tests/json/input.json')
    .toString()
    .trim();
  const expected = readFileSync(`tests/json/output${outputFilePostfix}.json`)
    .toString()
    .trim();
  return { data, expected };
};

test('handler should return a correct configuration', () => {
  const { data, expected } = loadData();
  const options = { indentation: 2 };
  const result = convert(data, options);
  expect(result).toEqual(expected);
});

test('handler should return configuration with different indentation than expected', () => {
  const { data, expected } = loadData();
  const options = { indentation: 4 };
  const result = convert(data, options);
  expect(result).not.toEqual(expected);
});

test('handler should create a correct configuration from template', () => {
  const { data, expected } = loadData('-template');
  const template = readFileSync('tests/json/template.json').toString();
  const options = { indentation: 2 };
  const result = convert(data, options, template);
  expect(result).toEqual(expected);
});
