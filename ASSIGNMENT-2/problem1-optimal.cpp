#include <bits/stdc++.h>
using namespace std;

// Optimal Approach
// Traverse the tree only once. While moving from a parent to a child,
// carry the XOR of ALL security keys on the root-to-current-node path.
// The root's own key is included, as required by the problem statement.
// A server is trusted when path XOR >= K.
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
    st.push({1, 0, key[1]});

    int trustedServers = 0;

    while (!st.empty()) {
        State cur = st.top();
        st.pop();

        if (cur.pathXor >= K) {
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
