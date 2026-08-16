#include <bits/stdc++.h>
using namespace std;

// Brute Force Approach
// At every topic, either skip it or take it. If we take it, we must skip
// the next topic so that no two selected topics are consecutive.
//
// Time Complexity: O(2^N)
// Space Complexity: O(N) recursion stack

int N;
vector<long long> points;

long long solve(int idx) {
    if (idx >= N) return 0;

    long long skip = solve(idx + 1);
    long long take = points[idx] + solve(idx + 2);

    return max(skip, take);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    cin >> N;
    points.resize(N);

    for (int i = 0; i < N; ++i) {
        cin >> points[i];
    }

    cout << solve(0) << '\n';
    return 0;
}
