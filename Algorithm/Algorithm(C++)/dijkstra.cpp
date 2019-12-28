/*
#include <iostream>
using namespace std;

const int V = 9;
const int INF = 1e9;

// �湮���� ���� ���� �� ���� ����� ���� ������ ���ϴ� �Լ�
int minDistance(int dist[], bool sptSet[]) {
	int min = INF, min_index;
	for (int v = 0; v < V; ++v) {
		if (!sptSet[v] && dist[v] <= min) {
			min = dist[v], min_index = v;
		}
	}
	return min_index;
}

// ���ͽ�Ʈ�� ���� ���� �� �������� �� ���������� �Ÿ��� ����ϴ� �Լ�
void printSolution(int dist[]) {
	cout << "Vertex \t\t Distance from Source\n";
	for (int i = 0; i < V; ++i)
		cout << i << " \t\t " << dist[i] << '\n';
}

// �� �������� �ٸ� �������� �ִܰŸ��� ���ϴ� �Լ�
void dijkstra(int graph[V][V], int src) {
	int dist[V]; // �ִܰŸ��� ��� �迭
	bool sptSet[V]; // �ش� ������ �ִܰŸ����� �˷��ִ� �迭

	// ��� �������� �Ÿ��� INF�� �ʱ�ȭ
	for (int i = 0; i < V; ++i) {
		dist[i] = INF, sptSet[i] = false;
	}
	// ���� ������ �ڽŰ��� �Ÿ� 0
	dist[src] = 0;

	for (int count = 0; count < V - 1; ++count) {
		// �ּ� ������ �����
		int u = minDistance(dist, sptSet);
		sptSet[u] = true;

		// �ش� �������� �ٸ� �������� ���� ���� ������ ������ ������ ��������
		for (int v = 0; v < V; ++v) {
			if (!sptSet[v] && graph[u][v] && dist[u] != INF
				&& dist[u] + graph[u][v] < dist[v])
				dist[v] = dist[u] + graph[u][v];
		}
	}
	printSolution(dist);
}

int main() {
	int graph[V][V] = { { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
					   { 4, 0, 8, 0, 0, 0, 0, 11, 0 },
					   { 0, 8, 0, 7, 0, 4, 0, 0, 2 },
					   { 0, 0, 7, 0, 9, 14, 0, 0, 0 },
					   { 0, 0, 0, 9, 0, 10, 0, 0, 0 },
					   { 0, 0, 4, 14, 10, 0, 2, 0, 0 },
					   { 0, 0, 0, 0, 0, 2, 0, 1, 6 },
					   { 8, 11, 0, 0, 0, 0, 1, 0, 7 },
					   { 0, 0, 2, 0, 0, 0, 6, 7, 0 } };

	dijkstra(graph, 0);

	return 0;
}
*/
/*
#include <iostream>
#include <queue>
using namespace std;

const int V = 9;
const int INF = 1e9;

struct vertex {
	int index, distance;

	// �Ÿ� ���� ������ ����
	bool operator < (const vertex& v const {
		return this->distance > v.distance;
	}
};
// ���ͽ�Ʈ�� ���� ���� �� �������� �� ���������� �Ÿ��� ����ϴ� �Լ�
void printSolution(int dist[]) {
	cout << "Vertex \t\t Distance from Source\n";
	for (int i = 0; i < V; ++i)
		cout << i << " \t\t " << dist[i] << '\n';
}

// �� �������� �ٸ� �������� �ִܰŸ��� ���ϴ� �Լ�
void dijkstra(int graph[V][V], int src) {
	int dist[V]; // �ִܰŸ��� ��� �迭
	bool sptSet[V]; // �ش� ������ �ִܰŸ����� �˷��ִ� �迭
	priority_queue<vertex> pq; // �ִܰŸ� ������ ��ȯ�ϴ� �ּ���

	// ��� �������� �Ÿ��� INF�� �ʱ�ȭ
	for (int i = 0; i < V; ++i) {
		dist[i] = INF, sptSet[i] = false;
	}
	// ���� ������ �ڽŰ��� �Ÿ� 0
	dist[src] = 0;
	pq.push({ src, 0 });
	while (!pq.empty()) {
		int u = pq.top().index;
		pq.pop();
		sptSet[u] = true;

		for (int v = 0; v < V; ++v) {
			if (!sptSet[v] && graph[u][v] && dist[u] != INF
				&& dist[u] + graph[u][v] < dist[v]) {
				dist[v] = dist[u] + graph[u][v];
				pq.push({ v, dist[v] });
			}
		}
	}
	
	printSolution(dist);
}

int main() {
	int graph[V][V] = { { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
					   { 4, 0, 8, 0, 0, 0, 0, 11, 0 },
					   { 0, 8, 0, 7, 0, 4, 0, 0, 2 },
					   { 0, 0, 7, 0, 9, 14, 0, 0, 0 },
					   { 0, 0, 0, 9, 0, 10, 0, 0, 0 },
					   { 0, 0, 4, 14, 10, 0, 2, 0, 0 },
					   { 0, 0, 0, 0, 0, 2, 0, 1, 6 },
					   { 8, 11, 0, 0, 0, 0, 1, 0, 7 },
					   { 0, 0, 2, 0, 0, 0, 6, 7, 0 } };

	dijkstra(graph, 0);

	return 0;
}
*/