// https://justicehui.github.io/hard-algorithm/2020/03/24/effective-mcmf/
/*
#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
using namespace std;
typedef pair<int, int> pii;
const int INF = 1e9;

struct MCMF {
	int s, e, SZ;
	struct edge { int v, c, d, dual; };
	vector<vector<edge>> g;
	vector<int> dist, inQ, check, work;

	MCMF(int SZ):SZ(SZ) {
		g.resize(SZ);
		dist.resize(SZ);
		inQ.resize(SZ);
		check.resize(SZ);
		work.resize(SZ);
	}

	void addEdge(int u, int v, int c, int d) {
		g[u].push_back({ v, c, d, (int)g[v].size() });
		g[v].push_back({ u, 0, -d, (int)g[u].size() - 1 });
	}

	bool spfa() {
		fill(dist.begin(), dist.end(), INF);
		fill(inQ.begin(), inQ.end(), 0);
		queue<int> q; q.push(s); dist[s] = 0;
		while (q.size()) {
			int cur = q.front(); q.pop(); inQ[cur] = 0;
			for (edge next : g[cur]) {
				if (next.c && dist[next.v] > dist[cur] + next.d) {
					dist[next.v] = dist[cur] + next.d;
					if (!inQ[next.v]) {
						inQ[next.v] = 1;
						q.push(next.v);
					}
				}
			}
		}
		return dist[e] < INF;
	}

	bool update() {
		int mn = INF;
		for (int i = 0; i < SZ; i++) {
			if (!check[i])continue;
			for (edge j : g[i])
				if (j.c && !check[j.v])
					mn = min(mn, dist[i] + j.d - dist[j.v]);
		}
		if (mn == INF)return 0;
		for (int i = 0; i < SZ; ++i)
			if (!check[i])
				dist[i] += mn;
		return 1;
	}

	int dfs(int cur, int f) {
		check[cur] = 1;
		if (cur == e)return f;
		for (; work[cur] < g[cur].size(); work[cur]++) {
			edge& i = g[cur][work[cur]];
			if (!check[i.v] && dist[i.v] == dist[cur] + i.d && i.c) {
				int ret = dfs(i.v, min(f, i.c));
				if (ret) {
					i.c -= ret;
					g[i.v][i.dual].c += ret;
					return ret;
				}
			}
		}
		return 0;
	}

	pii run(int _s, int _e) {
		s = _s, e = _e;
		int mc = 0, mf = 0;
		spfa();
		do {
			fill(check.begin(), check.end(), 0);
			fill(work.begin(), work.end(), 0);
			int cur = 0;
			while (cur = dfs(s, INF)) {
				mc += dist[e] * cur;
				mf += cur;
				fill(check.begin(), check.end(), 0);
			}
		} while (update());
		return pii(mc, mf);
	}
} mcmf(888);

int n, m;
const int s = 881, e = 882;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);

	cin >> n >> m;
	for (int i = 1; i <= n; ++i) {
		int cnt;
		cin >> cnt;
		while (cnt--) {
			int a, b; cin >> a >> b;
			mcmf.addEdge(i, a + 400, 1, b);
		}
	}
	for (int i = 1; i <= n; ++i)
		mcmf.addEdge(s, i, 1, 0);
	for (int i = 1; i <= m; ++i)
		mcmf.addEdge(i + 400, e, 1, 0);
	pii res = mcmf.run(s, e);
	cout << res.second << "\n" << res.first << endl;
}
*/