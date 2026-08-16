const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim();
if (!input) process.exit(0);

const data = input.split(/\s+/).map(Number);
let idx = 0;

const N = data[idx++];
const M = data[idx++];
const D = data[idx++];

const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < M; i++) {
  const u = data[idx++];
  const v = data[idx++];
  graph[u].push(v);
  graph[v].push(u);
}

const distance = new Array(N + 1).fill(-1);
const queue = new Array(N);
let head = 0;
let tail = 0;

queue[tail++] = 1;
distance[1] = 0;

let efficientlyReachable = 0;

while (head < tail) {
  const city = queue[head++];

  if (distance[city] > D) continue;
  efficientlyReachable++;

  // No need to explore deeper once the maximum allowed distance is reached.
  if (distance[city] === D) continue;

  for (const next of graph[city]) {
    if (distance[next] !== -1) continue;
    distance[next] = distance[city] + 1;
    queue[tail++] = next;
  }
}

console.log(efficientlyReachable);
