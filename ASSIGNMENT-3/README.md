# ASSIGNMENT-3 — Greedy & Dynamic Programming

This folder contains JavaScript solutions for both problems from the EPAM Greedy & Dynamic Programming assignment.

## Problem 1: Scholarship Distribution

File: `problem1-scholarship-distribution.js`

Approach: sort the required scholarship amounts in ascending order and keep selecting the cheapest students while the total stays within budget.

Time complexity: `O(N log N)`

Space complexity: `O(N)` for the parsed input.

Run:

```bash
node problem1-scholarship-distribution.js < input.txt
```

## Problem 2: Maximum Learning Points

File: `problem2-maximum-learning-points.js`

Approach: dynamic programming for maximum sum of non-adjacent values. Only the previous two DP states are required.

Time complexity: `O(N)`

Extra space complexity: `O(1)`

Run:

```bash
node problem2-maximum-learning-points.js < input.txt
```
