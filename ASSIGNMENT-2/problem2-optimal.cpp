#include <bits/stdc++.h>
using namespace std;

// Optimal Approach
// Run BFS once from City 1. In an unweighted graph, BFS gives the shortest
// distance from the source to every city.
//
// Time Complexity: O(N + M)
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

    vector<int> dist(N + 1, -1);
    queue<int> q;
    q.push(1);
    dist[1] = 0;

    while (!q.empty()) {
        int node = q.front();
        q.pop();

        for (int next : graph[node]) {
            if (dist[next] == -1) {
                dist[next] = dist[node] + 1;
                q.push(next);
            }
        }
    }

    int countReachable = 0;
    for (int city = 1; city <= N; ++city) {
        if (dist[city] != -1 && dist[city] <= D) {
            ++countReachable;
        }
    }

    cout << countReachable << '\n';
    return 0;
}
