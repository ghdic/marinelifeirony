/*
#include <iostream>
using namespace std;

const int V = 9;
const int INF = 1e9;

// 방문하지 않은 정점 중 가장 비용이 작은 정점을 구하는 함수
int minDistance(int dist[], bool sptSet[]) {
	int min = INF, min_index;
	for (int v = 0; v < V; ++v) {
		if (!sptSet[v] && dist[v] <= min) {
			min = dist[v], min_index = v;
		}
	}
	return min_index;
}

// 다익스트라를 통해 구한 한 정점에서 각 정점까지의 거리를 출력하는 함수
void printSolution(int dist[]) {
	cout << "Vertex \t\t Distance from Source\n";
	for (int i = 0; i < V; ++i)
		cout << i << " \t\t " << dist[i] << '\n';
}

// 한 정점에서 다른 정점과의 최단거리를 구하는 함수
void dijkstra(int graph[V][V], int src) {
	int dist[V]; // 최단거리를 담는 배열
	bool sptSet[V]; // 해당 정점이 최단거리인지 알려주는 배열

	// 모든 정점과의 거리를 INF로 초기화
	for (int i = 0; i < V; ++i) {
		dist[i] = INF, sptSet[i] = false;
	}
	// 시작 정점은 자신과의 거리 0
	dist[src] = 0;

	for (int count = 0; count < V - 1; ++count) {
		// 최소 정점을 골라줌
		int u = minDistance(dist, sptSet);
		sptSet[u] = true;

		// 해당 정점에서 다른 정점으로 가는 값이 기존의 값보다 작으면 갱신해줌
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

	// 거리 작은 순으로 정렬
	bool operator < (const vertex& v const {
		return this->distance > v.distance;
	}
};
// 다익스트라를 통해 구한 한 정점에서 각 정점까지의 거리를 출력하는 함수
void printSolution(int dist[]) {
	cout << "Vertex \t\t Distance from Source\n";
	for (int i = 0; i < V; ++i)
		cout << i << " \t\t " << dist[i] << '\n';
}

// 한 정점에서 다른 정점과의 최단거리를 구하는 함수
void dijkstra(int graph[V][V], int src) {
	int dist[V]; // 최단거리를 담는 배열
	bool sptSet[V]; // 해당 정점이 최단거리인지 알려주는 배열
	priority_queue<vertex> pq; // 최단거리 순으로 반환하는 최소힙

	// 모든 정점과의 거리를 INF로 초기화
	for (int i = 0; i < V; ++i) {
		dist[i] = INF, sptSet[i] = false;
	}
	// 시작 정점은 자신과의 거리 0
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