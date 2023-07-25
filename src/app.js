import { program } from 'commander';
import clipboard from 'clipboardy';
import { handle } from './handler.js';

program
  .option('-i, --indentation <number>', 'number of spaces', 2)
  .option('-o, --output', 'write output to console', true)
  .option('-c, --clipboard', 'write output to clipboard', false)

program.parse(process.argv);

const options = program.opts();

const {
  output: writeToConsole,
  clipboard: writeToClipboard
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
