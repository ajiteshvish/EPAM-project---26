# ASSIGNMENT-2 — Tree & Graph

This folder contains C++ solutions for both problems. For each problem, a brute-force approach is provided first, followed by an optimal approach suitable for the given constraints.

## Problem 1: Tree of Trusted Servers

### Brute Force
File: `problem1-bruteforce.cpp`

For every server, independently find the path from Server 1 to that server and recompute the XOR of all keys on the path, including the root key. Count the server when the path XOR is greater than or equal to `K`.

- Time Complexity: `O(N^2)` worst case
- Space Complexity: `O(N)`

### Optimal
File: `problem1-optimal.cpp`

Traverse the tree once using DFS while carrying the XOR of all keys from the root to the current node. The root key is included and a server is counted when path XOR `>= K`.

- Time Complexity: `O(N)`
- Space Complexity: `O(N)`

> Note: The supplied sample outputs for this problem conflict with the written definition. The implementations now follow the written problem statement exactly: root key included and condition `>= K`.

Compile and run:

```bash
g++ -std=c++17 problem1-bruteforce.cpp -o brute
./brute < input.txt

g++ -std=c++17 problem1-optimal.cpp -o optimal
./optimal < input.txt
```

## Problem 2: Emergency Route Validation

### Brute Force
File: `problem2-bruteforce.cpp`

Run a separate BFS from City 1 for every target city and check whether its shortest distance is at most `D`.

- Time Complexity: `O(N * (N + M))`
- Space Complexity: `O(N + M)`

### Optimal
File: `problem2-optimal.cpp`

Run BFS only once from City 1. Since the graph is unweighted, one BFS gives the shortest distance to every city.

- Time Complexity: `O(N + M)`
- Space Complexity: `O(N + M)`

Compile and run:

```bash
g++ -std=c++17 problem2-bruteforce.cpp -o brute
./brute < input.txt

g++ -std=c++17 problem2-optimal.cpp -o optimal
./optimal < input.txt
```
