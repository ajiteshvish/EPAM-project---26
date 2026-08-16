const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim();
if (!input) process.exit(0);

const data = input.split(/\s+/).map(Number);
let idx = 0;

const N = data[idx++];
const K = data[idx++];

const keys = new Array(N + 1);
for (let i = 1; i <= N; i++) {
  keys[i] = data[idx++];
}

const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < N - 1; i++) {
  const u = data[idx++];
  const v = data[idx++];
  graph[u].push(v);
  graph[v].push(u);
}

let trustedServers = 0;

// The examples in the assignment are consistent with:
// 1) XOR beginning after the root node (root XOR = 0), and
// 2) checking pathXor > K.
// This implementation follows the provided examples.
const stack = [[1, 0, 0]]; // [node, parent, xorFromAfterRoot]

while (stack.length > 0) {
  const [node, parent, pathXor] = stack.pop();

  if (pathXor > K) {
    trustedServers++;
  }

  for (const next of graph[node]) {
    if (next === parent) continue;
    stack.push([next, node, pathXor ^ keys[next]]);
  }
}

console.log(trustedServers);
