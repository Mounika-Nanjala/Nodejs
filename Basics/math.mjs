// const { add } = require('./sum');
// const { subtract } = require('./difference');
import add from './sum.mjs';
import subtract from './difference.mjs';
//in package.json "type": "module"

// console.log(process.argv);

const args = process.argv.slice(2);

// console.log(args);
if (args.length !== 3) {
    console.error('Please provide exactly two numbers and an operation');
    process.exit(1);
}

const num1 = parseFloat(args[0]);
const op = args[1];
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
    console.error('Both arguments must be numbers');
    process.exit(2);
}

if (op !== '+' && op !== '-') {
    console.error('Use + to add, or - to subtract');
    process.exit(3);
}

let msg = '';

if (op === '+') {
    msg = add(num1, num2);
} else {
    msg = subtract(num1, num2);
}

console.log(msg);
process.exit(0);