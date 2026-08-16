#include <bits/stdc++.h>
using namespace std;

// Optimal Greedy Approach
// To maximize the number of students, always award scholarships to students
// with the smallest requirements first.
//
// Time Complexity: O(N log N)
// Space Complexity: O(1) extra apart from input storage

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int N;
    long long B;
    cin >> N >> B;

    vector<long long> scholarship(N);
    for (int i = 0; i < N; ++i) {
        cin >> scholarship[i];
    }

    sort(scholarship.begin(), scholarship.end());

    long long spent = 0;
    int count = 0;

    for (long long amount : scholarship) {
        if (spent + amount > B) break;
        spent += amount;
        ++count;
    }

    cout << count << '\n';
    return 0;
}
