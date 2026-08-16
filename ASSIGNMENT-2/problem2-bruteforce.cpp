#include <bits/stdc++.h>
using namespace std;

// Brute Force Approach
// For each city, run a separate BFS from City 1 and stop when that target
// city is reached. Count it if its shortest distance is <= D.
//
// Time Complexity: O(N * (N + M))
// Space Complexity: O(N + M)

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int N, M, D;
    cin >> N >> M >> D;

    vector<vector<int>> graph(N + 1);
    for (int i = 0; i < M; ++i) {
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
        graph[v].push_back(u);
    }

    int countReachable = 0;

    for (int target = 1; target <= N; ++target) {
        vector<int> dist(N + 1, -1);
        queue<int> q;
        q.push(1);
        dist[1] = 0;

        while (!q.empty()) {
            int node = q.front();
            q.pop();

            if (node == target) break;

            for (int next : graph[node]) {
                if (dist[next] == -1) {
                    dist[next] = dist[node] + 1;
                    q.push(next);
                }
            }
        }

        if (dist[target] != -1 && dist[target] <= D) {
            ++countReachable;
        }
    }

    cout << countReachable << '\n';
    return 0;
}
