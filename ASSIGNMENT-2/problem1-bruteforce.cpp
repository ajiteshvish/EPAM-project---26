#include <bits/stdc++.h>
using namespace std;

// Brute Force Approach
// For every server, independently search the path from Server 1 to that server
// and recompute the XOR value.
//
// NOTE: The assignment's written condition conflicts with its sample outputs.
// This solution follows the PROVIDED SAMPLES:
// - XOR starts after the root, so Server 1 has path XOR = 0.
// - A server is trusted when path XOR > K.
//
// Time Complexity: O(N^2) in the worst case
// Space Complexity: O(N)

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int N;
    long long K;
    cin >> N >> K;

    vector<int> key(N + 1);
    for (int i = 1; i <= N; ++i) {
        cin >> key[i];
    }

    vector<vector<int>> graph(N + 1);
    for (int i = 0; i < N - 1; ++i) {
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
        graph[v].push_back(u);
    }

    auto getPathXor = [&](int target) {
        struct State {
            int node;
            int parent;
            int pathXor;
        };

        stack<State> st;
        st.push({1, 0, 0});

        while (!st.empty()) {
            State cur = st.top();
            st.pop();

            if (cur.node == target) {
                return cur.pathXor;
            }

            for (int next : graph[cur.node]) {
                if (next == cur.parent) continue;
                st.push({next, cur.node, cur.pathXor ^ key[next]});
            }
        }

        return -1; // Tree is connected, so this should never happen.
    };

    int trustedServers = 0;

    for (int server = 1; server <= N; ++server) {
        int pathXor = getPathXor(server);
        if (pathXor > K) {
            ++trustedServers;
        }
    }

    cout << trustedServers << '\n';
    return 0;
}
