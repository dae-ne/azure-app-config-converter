import { program } from 'commander';
import clipboard from 'clipboardy';
import fs from 'fs';
import { handle } from './handler.js';

program
  .option('-i, --indentation <number>', 'number of spaces', 2)
  .option('-o, --output', 'write output to console', true)
  .option('-c, --clipboard', 'write output to clipboard', false)
  .option('-f, --file', 'write output to file', false)
  .option('-n, --name <file-name>', 'output file name')
  .option('-t, --type <type>', 'type of the configuration');

program.parse(process.argv);

const options = program.opts();

const {
  output: writeToConsole,
  clipboard: writeToClipboard,
  file: writeToFile,
  type: configurationType
} = options;

const data = clipboard.readSync();
const result = handle(data, options);

if (writeToConsole) {
  console.log(result);
}

if (writeToClipboard) {
  clipboard.writeSync(result);
  console.log('result saved to clipboard');
}

if (writeToFile) {
  let fileName = options.name;

  if (!fileName) {
    fileName = configurationType === 'functionapp'
      ? 'local.settings.json'
      : 'appsettings.json';
  }

  const directory = './output';
  const filePath = `${directory}/${fileName}`;

  try {
    if (!fs.existsSync(directory)){
      fs.mkdirSync(directory);
    }

    fs.writeFileSync(filePath, result);
    console.log(`result saved to ${fileName}`);
  } catch (error) {
    console.error(error);
  }
}
