/*
#include <iostream>
using namespace std;

const int INF = 1e9;
int graph[5][5] = {
	{0, 1, INF, 4, INF},
	{1, 0, INF, 8, INF},
	{INF, INF, 0, 9, 6},
	{4, 8, 9, 0, 3},
	{INF, INF, 6, 3, 0}
};

int path[5][5];

void printPath(int v, int u) {
	if (path[v][u] == v)return;

	printPath(v, path[v][u]);
	cout << path[v][u]+1 << " ";
}

void printSolution() {
	for (int v = 0; v < 5; ++v) {
		for (int u = 0; u < 5; ++u) {
			if (u != v && path[v][u] != -1) {
				cout << v + 1 << "���� " << u + 1 << "�� ���� ���� ª���� -> " << v + 1 << ' ';
				printPath(v, u);
				cout << u + 1 << '\n';
			}
		}
	}
}

void print() {
	for (int i = 0; i < 5; ++i) {
		for (int j = 0; j < 5; ++j) {
			if (graph[i][j] == INF)
				cout << "INF ";
			else
				cout << graph[i][j] << ' ';
		}
		cout << '\n';
	}
}

void floydwarshall() {
	for (int v = 0; v < 5; ++v) {
		for (int u = 0; u < 5; ++u) {
			if (v == u)
				path[v][u] = 0;
			else if (graph[v][u] != INF)
				path[v][u] = v;
			else
				path[v][u] = -1;
		}
	}

	for (int by = 0; by < 5; ++by) {
		for (int from = 0; from < 5; ++from) {
			for (int to = 0; to < 5; ++to) {

				if (graph[from][by] + graph[by][to] < graph[from][to]) {
					graph[from][to] = graph[from][by] + graph[by][to];
					path[from][to] = path[by][to];
				}
			}

			// �밢�� ���Ұ� ���� �Ǹ� ���� ����ġ ����Ŭ�� �����
			if (graph[from][from] < 0) {
				cout << "���� ����ġ ����Ŭ �߰�!\n";
				graph[from][from] = 0;
				cout << by + 1 << "��° ��带 ���� ���� ����" << endl;
				print();
				cout << '\n';
				return;
			}
		}
		cout << by + 1 << "��° ��带 ���� ���� ����" << endl;
		print();
		cout << '\n';
	}
}

int main() {
	cout << "�ʱ� ����" << endl;
	print();
	floydwarshall();
	printSolution();
	return 0;
}
*/