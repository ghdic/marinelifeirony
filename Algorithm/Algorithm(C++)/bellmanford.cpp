// bellmanford 음의 가중치 있는 그래프 일대다 최단거리 구하는 알고리즘
/*
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct vertex {
	int dest, weight;
};

const int INF = 1e9;
const int V = 5;
const int E = 8;

vector<vertex> adj[V];
int dist[V];

int info[E][3] = {
	{0, 1, -1},
	{0, 2, 4},
	{1, 2, 3},
	{1, 3, 2},
	{1, 4, 2},
	{3, 2, 5},
	{3, 1, 1},
	{4, 3, -3}
};

void print() {
	for (int i = 0; i < V; ++i) {
		cout << i << "까지 최솟값 " << dist[i] << '\n';
	}
}

bool Bellmanford() {
	fill(&dist[0], &dist[V], INF);
	dist[0] = 0;

	// 정점개수만큼 반복
	for (int i = 1; i <= V; ++i) {
		// 각 정점을 갱신해줌
		for (int j = 0; j < V; ++j) {
			if (dist[j] == INF)continue;
			for (vertex& v : adj[j]) {
				if (dist[v.dest] > dist[j] + v.weight) {
					dist[v.dest] = dist[j] + v.weight;
					// 정점개수번째 돌때 갱신이 일어나면 음의 가중치 사이클이 생긴것
					if (i == V)return true;
				}
			}
		}
	}
	return false;
}

int main() {
	for (int i = 0; i < E; ++i) {
		adj[info[i][0]].push_back({ info[i][1] , info[i][2] });
	}
	cout << "음의 가중치 사이클 생김? -> " << (Bellmanford() ? "YES\n" : "NO\n");
	print();
}
*/