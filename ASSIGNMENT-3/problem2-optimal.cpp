#include <bits/stdc++.h>
using namespace std;

// Optimal Dynamic Programming Approach
// dp[i] = maximum learning points obtainable using topics from 0..i.
// For each topic, either skip it (dp[i-1]) or take it together with dp[i-2].
// We can optimize the DP array to two variables.
//
// Time Complexity: O(N)
// Space Complexity: O(1)

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int N;
    cin >> N;

    vector<long long> points(N);
    for (int i = 0; i < N; ++i) {
        cin >> points[i];
    }

    long long prev2 = 0;
    long long prev1 = 0;

    for (long long x : points) {
        long long current = max(prev1, prev2 + x);
        prev2 = prev1;
        prev1 = current;
    }

    cout << prev1 << '\n';
    return 0;
}
