#include <bits/stdc++.h>
using namespace std;

// Brute Force Approach
// Try every subset of students and check whether the total scholarship
// requirement is within budget. Track the maximum number selected.
//
// Time Complexity: O(2^N * N)
// Space Complexity: O(N) recursion stack

int N;
long long B;
vector<long long> scholarship;
int best = 0;

void solve(int idx, long long usedBudget, int selected) {
    if (usedBudget > B) return;

    if (idx == N) {
        best = max(best, selected);
        return;
    }

    // Do not select current student
    solve(idx + 1, usedBudget, selected);

    // Select current student
    solve(idx + 1, usedBudget + scholarship[idx], selected + 1);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    cin >> N >> B;
    scholarship.resize(N);

    for (int i = 0; i < N; ++i) {
        cin >> scholarship[i];
    }

    solve(0, 0, 0);

    cout << best << '\n';
    return 0;
}
