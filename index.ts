import { TuringMachine } from './turing-machine';

var args = process.argv.slice(2);

if (args.length < 2) {
    throw new Error("Cannot multiply only one number");
}
let left = Number.parseFloat(args[0]);
let right = Number.parseFloat(args[1]);
let delay = 0;
if (args.length > 2) {
    delay = Number.parseFloat(args[2]);
}
const machine = new TuringMachine(left, right, delay);

machine.compute();