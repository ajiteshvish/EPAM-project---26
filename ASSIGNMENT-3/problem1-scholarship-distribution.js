const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim();
if (!input) process.exit(0);

const data = input.split(/\s+/).map(Number);
let idx = 0;

const N = data[idx++];
const budget = data[idx++];
const scholarships = data.slice(idx, idx + N);

scholarships.sort((a, b) => a - b);

let spent = 0;
let selected = 0;

for (const amount of scholarships) {
  if (spent + amount > budget) break;
  spent += amount;
  selected++;
}

console.log(selected);
