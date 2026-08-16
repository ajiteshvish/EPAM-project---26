# ASSIGNMENT-3 — Greedy & Dynamic Programming

This folder contains C++ solutions for both problems. For each problem, a brute-force approach is provided first, followed by an optimal approach.

## Problem 1: Scholarship Distribution

### Brute Force
File: `problem1-bruteforce.cpp`

Try every subset of students and keep the largest subset whose total scholarship requirement does not exceed the budget.

- Time Complexity: `O(2^N * N)`
- Space Complexity: `O(N)` recursion stack

### Optimal — Greedy
File: `problem1-optimal.cpp`

Sort scholarship requirements in increasing order and keep selecting the cheapest students while the budget allows.

- Time Complexity: `O(N log N)`
- Extra Space Complexity: `O(1)` apart from input storage

Compile and run:

```bash
g++ -std=c++17 problem1-bruteforce.cpp -o brute
./brute < input.txt

g++ -std=c++17 problem1-optimal.cpp -o optimal
./optimal < input.txt
```

## Problem 2: Maximum Learning Points

### Brute Force
File: `problem2-bruteforce.cpp`

At each topic, either skip it or take it and then skip the next topic so that no two selected topics are consecutive.

- Time Complexity: `O(2^N)`
- Space Complexity: `O(N)` recursion stack

### Optimal — Dynamic Programming
File: `problem2-optimal.cpp`

For every topic, compare skipping it with taking it plus the best result up to two positions earlier. The DP is space-optimized to two variables.

- Time Complexity: `O(N)`
- Extra Space Complexity: `O(1)`

Compile and run:

```bash
g++ -std=c++17 problem2-bruteforce.cpp -o brute
./brute < input.txt

g++ -std=c++17 problem2-optimal.cpp -o optimal
./optimal < input.txt
```
