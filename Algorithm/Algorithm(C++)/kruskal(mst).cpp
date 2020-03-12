/*
크루스칼 알고리즘
최소 스패닝트리를 만들때 씀
각 간선을 비용순으로 오름차순 정렬하고
유니온 파인드로 사이클이 생기는지
확인하며 최소비용인 간선을 추가한다.
O(ElogE)
*/

/*
#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

struct KS {
	int u, v, val;

	bool operator < (KS& d) {
		return val < d.val;
	}
};

vector<KS> edge;

int parent[10001], res, v, e;



int find(int u) {
	if (u == parent[u])
		return u;
	return u = find(parent[u]);
}

bool merge(int u, int v) {
	u = find(u);
	v = find(v);
	if (u == v) // 사이클 존재
		return false;
	parent[u] = v;
	return true;
}
int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cin >> v >> e;

	for (int i = 1; i <= v; ++i)
		parent[i] = i;

	for (int i = 0; i < e; ++i) {
		KS ks;
		cin >> ks.u >> ks.v >> ks.val;
		edge.push_back(ks);
	}

	sort(edge.begin(), edge.end());

	for (int i = 0; i < e; ++i) {
		if (merge(edge[i].u, edge[i].v)) {
			res += edge[i].val;
		}
	}

	cout << res << endl;
	return 0;
}
*/