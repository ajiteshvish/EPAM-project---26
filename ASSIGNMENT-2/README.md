# ASSIGNMENT-2 — Tree & Graph

This folder contains C++ solutions for both problems. For each problem, a brute-force approach is provided first, followed by an optimal approach suitable for the given constraints.

## Problem 1: Tree of Trusted Servers

### Brute Force
File: `problem1-bruteforce.cpp`

For every server, independently find the path from Server 1 to that server and recompute the path XOR.

- Time Complexity: `O(N^2)` worst case
- Space Complexity: `O(N)`

### Optimal
File: `problem1-optimal.cpp`

Traverse the tree once using DFS while carrying the path XOR from the root toward each node.

- Time Complexity: `O(N)`
- Space Complexity: `O(N)`

> Note: The wording in the supplied problem statement conflicts with the provided sample outputs. The implementations follow the expected outputs given in the assignment.

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
