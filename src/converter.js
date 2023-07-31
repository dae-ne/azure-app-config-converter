export const convert = (data, options, templateFile = null) => {
  const { indentation } = options;

  const json = JSON.parse(data);
  let result = json.reduce((p, c) => ({ ...p, [c.name]: c.value }), {});

  if (templateFile) {
    let resultStr = JSON.stringify(result);
    resultStr = templateFile.replace('"<config>"', resultStr);
    result = JSON.parse(resultStr);
  }

  return JSON
    .stringify(result, null, parseInt(indentation))
    .trim();
};
