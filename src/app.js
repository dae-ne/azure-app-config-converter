import { program } from 'commander';
import clipboard from 'clipboardy';
import fs from 'fs';
import { convert } from './converter.js';

const DEFAULT_FILE_NAME = 'appsettings.json';
const OUTPUT_DIRECTORY = './output';
const TEMPLATE_DIRECTORY = './templates';

program
  .option('-i, --indentation <number>', 'number of spaces', 2)
  .option('-o, --output', 'write output to console', true)
  .option('-c, --clipboard', 'write output to clipboard', false)
  .option('-f, --file', 'write output to file')
  .option('-t, --template <name>', 'template file name')
  .option('-n, --name <name>', 'output file name');

program.parse(process.argv);

const options = program.opts();

const {
  output: writeToConsole,
  clipboard: writeToClipboard,
  file: writeToFile,
  template: templateName,
  name: fileName
} = options;

let templateFile = null;

if (templateName) {
  try {
    templateFile = fs.readFileSync(`${TEMPLATE_DIRECTORY}/${templateName}`)
      .toString()
      .trim();
  } catch (error) {
    console.error(error);
  }
}

const data = clipboard.readSync();
const result = convert(data, options, templateFile);

if (writeToConsole) {
  console.log(result);
}

if (writeToClipboard) {
  clipboard.writeSync(result);
  console.log('result saved to clipboard');
}

if (writeToFile || fileName) {
  let outputFileName = fileName ?? templateName;

  if (!outputFileName) {
    outputFileName = DEFAULT_FILE_NAME;
  }

  const directory = OUTPUT_DIRECTORY;
  const filePath = `${directory}/${outputFileName}`;

  try {
    if (!fs.existsSync(directory)){
      fs.mkdirSync(directory);
    }

    fs.writeFileSync(filePath, result);
    console.log(`result saved to ${outputFileName}`);
  } catch (error) {
    console.error(error);
  }
}
