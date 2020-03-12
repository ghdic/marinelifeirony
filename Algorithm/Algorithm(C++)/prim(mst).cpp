/*
프림알고리즘
mst 구하는 알고리즘이고
시작 지점에서부터
pq로 가장 짧은 경로를 이어줌
시간복잡도와 정점의 개수가 관련 있음
O(vlogv)
*/

/*
#include <iostream>
#include <vector>
#include <queue>
#include <utility>
#include <functional>
using namespace std;
typedef pair<int, int> pii;

int v, e;
bool visited[10001];
vector<pair<int, int>> vc[10001];

int prim(int start) {
	visited[start] = true;
	priority_queue<pii, vector<pii>, greater<pii>> pq;

	for (pii& next : vc[start]) {
		pq.push(pii(next.second, next.first));
	}

	int ans = 0;

	while (!pq.empty()) {
		int cur = pq.top().second;
		int curCost = pq.top().first;
		pq.pop();

		if (visited[cur])continue;

		visited[cur] = true;

		ans += curCost;

		for (pii& next : vc[cur]) {
			pq.push(pii(next.second, next.first));
		}
	}

	return ans;
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cin >> v >> e;

	for (int i = 0; i < e; ++i) {
		int u, v, val;
		cin >> u >> v >> val;
		vc[u].push_back(pii(v, val));
		vc[v].push_back(pii(u, val));
	}
	cout << prim(1) << endl;
	return 0;
}
*/