/*
1. 유량을 0으로 초기화하고 시작한다
2. 경로를 통해 지나갈때 이전 경로를 저장한다.
3. 흘려준다.

시간복잡도 O(max_flow * E)

*/

/*
#include <iostream>
#include <limits.h>
#include <string.h>
#include <queue>
#include <algorithm>
using namespace std;

// 그래프 크기
const int V = 6;

// s -> t 까지가 있는 경우 경로에 유량을 채워주고 return true한다.
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
    // 목적지까지 도달했으면 true 반환
    return visited[t];
}

int fordFulkerson(int graph[V][V], int s, int t) {
    int u, v;

    int rGraph[V][V]; // flow를 담는 그래프

    memcpy(rGraph, graph, sizeof(rGraph));
    int path[V]; // bfs할때 flow 경로를 저장할 친구

    int max_flow = 0;

    while (bfs(rGraph, s, t, path)) {
        int path_flow = INT_MAX;
        // 모든 경로를 통해 지나갈 수 있는 최대 유량을 찾는다.
        for (v = t; v != s; v = path[v]) {
            u = path[v];
            path_flow = min(path_flow, rGraph[u][v]);
        }

        // 찾은 유량을 업데이트 해준다. 반대방향은 빼줌
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

    cout << "최고 유량 -> " << fordFulkerson(graph, 0, 5) << endl;
    return 0;
}
*/