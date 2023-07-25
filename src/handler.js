import { createFunctionAppSettings } from './templates.js';

export const handle = (data, options) => {
  const { indentation, type } = options;

  const json = JSON.parse(data);
  let result = json.reduce((p, c) => ({ ...p, [c.name]: c.value }), {});

  if (type === 'functionapp') {
    result = createFunctionAppSettings(result);
  }

  return JSON
    .stringify(result, null, parseInt(indentation))
    .trim();
};
