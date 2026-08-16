#include <bits/stdc++.h>
using namespace std;

// Optimal Approach
// Traverse the tree only once. While moving from a parent to a child,
// carry the XOR value of the path computed so far.
//
// NOTE: The assignment's written condition conflicts with its sample outputs.
// This solution follows the PROVIDED SAMPLES:
// - XOR starts after the root, so Server 1 has path XOR = 0.
// - A server is trusted when path XOR > K.
//
// Time Complexity: O(N)
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

    struct State {
        int node;
        int parent;
        int pathXor;
    };

    stack<State> st;
    st.push({1, 0, 0});

    int trustedServers = 0;

    while (!st.empty()) {
        State cur = st.top();
        st.pop();

        if (cur.pathXor > K) {
            ++trustedServers;
        }

        for (int next : graph[cur.node]) {
            if (next == cur.parent) continue;
            st.push({next, cur.node, cur.pathXor ^ key[next]});
        }
    }

    cout << trustedServers << '\n';
    return 0;
}
