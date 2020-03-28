//https://justicehui.github.io/hard-algorithm/2020/03/24/effective-mcmf/
// 음수 가중치 없을때 사용 가능
/*
#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
#include <cstring>
#define x first
#define y second
using namespace std;
typedef pair<int, int> pii;
const int SZ = 888;
const int INF = 1e9;

struct MCMF {
	int s, t; //source, sink
	struct Edge { int v, c, d, dual; };
	vector<Edge> g[SZ];
	void addEdge(int s, int e, int c, int d) {
		g[s].push_back({ e, c, d, (int)g[e].size() });
		g[e].push_back({ s, 0, -d, (int)g[s].size() - 1 });
	}

	int h[SZ], inq[SZ]; //johnson's algorithm, spfa
	int dst[SZ]; //dijkstra
	void init(int _s, int _t) {
		s = _s, t = _t;
		memset(h, 0x3f, sizeof h);
		memset(dst, 0x3f, sizeof dst);

		//johnson's algorithm with spfa
		queue<int> q; q.push(s); inq[s] = 1;
		while (q.size()) {
			int now = q.front(); q.pop(); inq[now] = 0;
			for (auto i : g[now]) {
				if (i.c && h[i.v] > h[now] + i.d) {
					h[i.v] = h[now] + i.d;
					if (!inq[i.v]) inq[i.v] = 1, q.push(i.v);
				}
			}
		}
		for (int i = 0; i < SZ; i++) {
			for (auto& j : g[i]) if (j.c) j.d += h[i] - h[j.v];
		}

		//get shortest path DAG with dijkstra
		priority_queue<pii> pq; pq.emplace(0, s); dst[s] = 0;
		while (pq.size()) {
			int now = pq.top().y;
			int cst = -pq.top().x;
			pq.pop();
			if (dst[now] - cst) continue;
			for (auto i : g[now]) {
				if (i.c && dst[i.v] > dst[now] + i.d) {
					dst[i.v] = dst[now] + i.d;
					pq.emplace(-dst[i.v], i.v);
				}
			}
		}
		for (int i = 0; i < SZ; i++) dst[i] += h[t] - h[s];
	}

	int chk[SZ], work[SZ];

	bool update() { //update shortest path DAG in O(V+E)
		int mn = INF;
		for (int i = 0; i < SZ; i++) {
			if (!chk[i]) continue;
			for (auto j : g[i]) {
				if (j.c && !chk[j.v]) mn = min(mn, dst[i] + j.d - dst[j.v]);
			}
		}
		if (mn >= INF) return 0;
		for (int i = 0; i < SZ; i++) {
			if (!chk[i]) dst[i] += mn;
		}
		return 1;
	}
	int dfs(int now, int fl) {
		chk[now] = 1;
		if (now == t) return fl;
		for (; work[now] < g[now].size(); work[now]++) {
			auto& i = g[now][work[now]];
			if (!chk[i.v] && dst[i.v] == dst[now] + i.d && i.c) {
				int ret = dfs(i.v, min(fl, i.c));
				if (ret) {
					i.c -= ret; g[i.v][i.dual].c += ret;
					return ret;
				}
			}
		}
		return 0;
	}
	pii run(int _s, int _t) { //{cost, flow}
		init(_s, _t);
		int cst = 0, fl = 0;
		do {
			memset(chk, 0, sizeof chk);
			memset(work, 0, sizeof work);
			int now = 0;
			while (now = dfs(s, INF)) {
				cst += dst[t] * now;
				fl += now;
				memset(chk, 0, sizeof chk);
			}
		} while (update());
		return pii(cst, fl);
	}
} mcmf;

int main() {
	ios_base::sync_with_stdio(0); cin.tie(0);
	int n, m; cin >> n >> m;
	for (int i = 1; i <= n; i++) {
		int cnt; cin >> cnt;
		while (cnt--) {
			int a, b; cin >> a >> b;
			mcmf.addEdge(i, a + 400, 1, b);
		}
	}
	const int s = 881, t = 882;
	for (int i = 1; i <= n; i++) mcmf.addEdge(s, i, 1, 0);
	for (int j = 1; j <= m; j++) mcmf.addEdge(j + 400, t, 1, 0);
	auto now = mcmf.run(s, t);
	cout << now.y << "\n" << now.x;
}
*/