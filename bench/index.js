if(!process.env.SUIT) {
  console.error('missing $SUIT');
  process.exit(1);
}

const AVAILABLE_SUITS = ['check', 'generate'];

if(AVAILABLE_SUITS.indexOf(process.env.SUIT) == -1) {
  console.error(`available suits are: ${AVAILABLE_SUITS}`);
  process.exit(2);
}

const exec = require('child_process').exec;
const path = require('path');

const suitPath = path.resolve(__dirname, process.env.SUIT);
const proc = exec(`node ${suitPath}`);
proc.stdout.pipe(process.stdout);
proc.stderr.pipe(process.stderr);
