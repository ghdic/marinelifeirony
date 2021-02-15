/*
1. ������ 0���� �ʱ�ȭ�ϰ� �����Ѵ�
2. ��θ� ���� �������� ���� ��θ� �����Ѵ�.
3. ����ش�.

�ð����⵵ O(max_flow * E)

*/

/*
#include <iostream>
#include <limits.h>
#include <string.h>
#include <queue>
#include <algorithm>
using namespace std;

// �׷��� ũ��
const int V = 6;

// s -> t ������ �ִ� ��� ��ο� ������ ä���ְ� return true�Ѵ�.
bool bfs(int graph[V][V], int s, int t, int path[]) {
	bool visited[V];
	memset(visited, false, sizeof(visited));

	queue<int> q;
	q.push(s);
    visited[s] = true;
    path[s] = -1;

    while (!q.empty()) {
        int u = q.front();
        q.pop();

        for (int v = 0; v < V; ++v) {
            if (visited[v])continue;
            if (graph[u][v] <= 0)continue;
            q.push(v);
            path[v] = u;
            visited[v] = true;
        }
    }
    // ���������� ���������� true ��ȯ
    return visited[t];
}

int fordFulkerson(int graph[V][V], int s, int t) {
    int u, v;

    int rGraph[V][V]; // flow�� ��� �׷���

    memcpy(rGraph, graph, sizeof(rGraph));
    int path[V]; // bfs�Ҷ� flow ��θ� ������ ģ��

    int max_flow = 0;

    while (bfs(rGraph, s, t, path)) {
        int path_flow = INT_MAX;
        // ��� ��θ� ���� ������ �� �ִ� �ִ� ������ ã�´�.
        for (v = t; v != s; v = path[v]) {
            u = path[v];
            path_flow = min(path_flow, rGraph[u][v]);
        }

        // ã�� ������ ������Ʈ ���ش�. �ݴ������ ����
        for (v = t; v != s; v = path[v]) {
            u = path[v];
            rGraph[u][v] -= path_flow;
            rGraph[v][u] += path_flow;
        }

        max_flow += path_flow;
    }
    return max_flow;
}

int main() {
    int graph[V][V] = { {0, 16, 13, 0, 0, 0},
                        {0, 0, 10, 12, 0, 0},
                        {0, 4, 0, 0, 14, 0},
                        {0, 0, 9, 0, 0, 20},
                        {0, 0, 0, 7, 0, 4},
                        {0, 0, 0, 0, 0, 0}
    };

    cout << "�ְ� ���� -> " << fordFulkerson(graph, 0, 5) << endl;
    return 0;
}
*/