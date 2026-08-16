const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim();
if (!input) process.exit(0);

const data = input.split(/\s+/).map(Number);
const N = data[0];
const points = data.slice(1, N + 1);

let prevTwo = 0;
let prevOne = 0;

for (const value of points) {
  const current = Math.max(prevOne, prevTwo + value);
  prevTwo = prevOne;
  prevOne = current;
}

console.log(prevOne);
