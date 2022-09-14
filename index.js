import { program } from 'commander';
import clipboard from 'clipboardy';

program.option('-i, --indentation <number>', 'number of spaces', 2);

program.parse(process.argv);

const options = program.opts();

const data = clipboard.readSync();
const json = JSON.parse(data);
const result = json.reduce((p, c) => ({ ...p, [c.name]: c.value }), {});

const indentation = parseInt(options.indentation);
const formattedResult = JSON.stringify(result, null, indentation);

clipboard.writeSync(formattedResult);

console.log('result saved to clipboard');
