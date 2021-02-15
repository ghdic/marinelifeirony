/*
#include <iostream>
using namespace std;

int parent[10];

int find(int num) {
	if (parent[num] == num)return num;
	return parent[num] = find(parent[num]);
}

void merge(int u, int v) {
	u = find(u);
	v = find(v);
	parent[u] = v;
	
	// 작은 값을 부모로 두는 경우
	//if (u < v)
	//	parent[v] = u;
	//else
	//	parent[u] = v;
	
}

int main() {
	int relation[5][2] = {
		{0, 1}, {1, 3}, {3, 4}, {2, 5}, {8, 9}
	};
	
	// 처음엔 자기 자신을 가르킴
	for (int i = 0; i < 10; ++i)
		parent[i] = i;
	for (int i = 0; i < 5; ++i)
		merge(relation[i][0], relation[i][1]);
	
	if (find(1) == find(2)) {
		cout << "1과 2는 같은 그룹\n";
	}
	else {
		cout << "1과 2는 다른 그룹\n";
	}

	if (find(0) == find(4)) {
		cout << "0과 4는 같은 그룹\n";
	}
	else {
		cout << "0과 4는 다른 그룹\n";
	}
}
*/