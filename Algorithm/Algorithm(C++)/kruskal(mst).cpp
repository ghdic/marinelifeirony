/*
ũ�罺Į �˰���
�ּ� ���д�Ʈ���� ���鶧 ��
�� ������ �������� �������� �����ϰ�
���Ͽ� ���ε�� ����Ŭ�� �������
Ȯ���ϸ� �ּҺ���� ������ �߰��Ѵ�.
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
	if (u == v) // ����Ŭ ����
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