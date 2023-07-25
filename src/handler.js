export const handle = (data, options) => {
  const { indentation } = options;

  const json = JSON.parse(data);
  const result = json.reduce((p, c) => ({ ...p, [c.name]: c.value }), {});

  return JSON
    .stringify(result, null, parseInt(indentation))
    .trim();
};
