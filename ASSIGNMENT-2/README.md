# ASSIGNMENT-2 — Tree & Graph

This folder contains JavaScript solutions for the two medium-level Tree and Graph problems from the EPAM assignment sheet.

## Problem 1: Tree of Trusted Servers

File: `problem1-tree-of-trusted-servers.js`

Approach: iterative DFS over the tree while maintaining the XOR value along the root-to-node path.

Time complexity: `O(N)`

Space complexity: `O(N)`

> Note: The wording in the supplied document says to include the root key and use `>= K`, but both provided expected outputs match a path XOR that starts after the root and uses `> K`. The solution follows the supplied expected outputs.

Run:

```bash
node problem1-tree-of-trusted-servers.js < input.txt
```

## Problem 2: Emergency Route Validation

File: `problem2-emergency-route-validation.js`

Approach: BFS from City 1 to calculate shortest-path distance in an unweighted graph. Expansion stops once distance `D` is reached.

Time complexity: `O(N + M)`

Space complexity: `O(N + M)`

Run:

```bash
node problem2-emergency-route-validation.js < input.txt
```
