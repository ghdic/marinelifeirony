/*
#include <iostream>
#include <algorithm>
using namespace std;

const int MAXN = 1024;

struct info {
	int parent, depth, size, pos_segbase, chain;
};

struct edge {
	int weight, deeper_end;
};

struct segmentTree {
	int base_array[MAXN], tree[MAXN * 6];
};

int tree[MAXN][MAXN];
info node[MAXN];
edge vertex[MAXN];
segmentTree s;

void addEdge(int e, int u, int v, int w) {
	tree[u - 1][v - 1] = e - 1;
	tree[v - 1][u - 1] = e - 1;

	vertex[e-1].weight = w;
}

void dfs(int cur, int prev, int depth, int num) {
	node[cur].parent = prev;
	node[cur].depth = depth;
	node[cur].size = 1;

	for (int i = 0; i < num; ++i) {
		if (i != cur && i != node[cur].parent && tree[cur][i] != -1) {
			vertex[tree[cur][i]].deeper_end = i;

			dfs(i, cur, depth + 1, num);

			node[cur].size += node[i].size;
		}
	}
}

void hld(int cur_node, int id, int* edge_counted, int* cur_chain, int num, int chain_heads[]) {
	if (chain_heads[*cur_chain] == -1)
		chain_heads[*cur_chain] = cur_node;

	node[cur_node].chain = *cur_chain;

	node[cur_node].pos_segbase = *edge_counted;

	s.base_array[(*edge_counted)++] = vertex[id].weight;

	int special_child = -1, speciel_edge_id;
	for (int i = 0; i < num; ++i)
		if (i != cur_node && i != node[cur_node].parent && tree[cur_node][i] != -1)
			if (special_child == -1 || node[special_child].size < node[i].size)
				special_child = i, speciel_edge_id = tree[cur_node][i];

	if (special_child != -1)
		hld(special_child, speciel_edge_id, edge_counted, cur_chain, num, chain_heads);

	for(int i = 0; i < num; ++i)
		if (i != cur_node && i != node[cur_node].parent &&
			i != special_child && tree[cur_node][i] != -1) {
			(*cur_chain)++;
			hld(i, tree[cur_node][i], edge_counted, cur_chain, num, chain_heads);
		}
}

int construct_ST(int ss, int se, int si) {
	if (ss == se - 1) {
		s.tree[si] = s.base_array[ss];
		return s.base_array[ss];
	}

	int mid = (ss + se) / 2;
	return s.tree[si] = max(construct_ST(ss, mid, si * 2),
		construct_ST(mid, se, si * 2 + 1));
}

int update_ST(int ss, int se, int si, int x, int val) {
	if (ss > x || se <= x);
	else if (ss == x && ss == se - 1)s.tree[si] = val;
	else {
		int mid = (ss + se) / 2;
		s.tree[si] = max(update_ST(ss, mid, si * 2, x, val),
			update_ST(mid, se, si * 2 + 1, x, val));
	}
	return s.tree[si];
}


void change(int e, int val, int num) {
	update_ST(0, num, 1, node[vertex[e].deeper_end].pos_segbase, val);
}

int LCA(int u, int v, int num) {
	int LCA_aux[MAXN + 5];

	if (node[u].depth < node[v].depth)
		swap(u, v);

	memset(LCA_aux, -1, sizeof(LCA_aux));

	while (u != -1) {
		LCA_aux[u] = 1;
		u = node[u].parent;
	}

	while (v) {
		if (LCA_aux[v] == 1)break;
		v = node[v].parent;
	}
	return v;
}

int RMQUtil(int ss, int se, int qs, int qe, int index) {
	if (qs <= ss && qe >= se - 1)
		return s.tree[index];

	if (se - 1 < qs || ss > qe)
		return -1;

	int mid = (ss + se) / 2;
	return max(RMQUtil(ss, mid, qs, qe, 2 * index),
		RMQUtil(mid, se, qs, qe, 2 * index + 1));
}

int RMQ(int qs, int qe, int num) {
	if (qs < 0|| qe > num - 1 || qs > qe) {
		cout << "Invalid Input\n";
		return -1;
	}

	return RMQUtil(0, num, qs, qe, 1);
}

int crawl_tree(int u, int v, int num, int chain_heads[]) {
	int chain_u, chain_v = node[v].chain, ans = 0;

	while (true) {
		chain_u = node[u].chain;

		if (chain_u == chain_v) {
			if (u == v);
			else
				ans = max(RMQ(node[v].pos_segbase + 1, node[u].pos_segbase, num), ans);
			break;
		}
		else {
			ans = max(ans, RMQ(node[chain_heads[chain_u]].pos_segbase, node[u].pos_segbase, num));

			u = node[chain_heads[chain_u]].parent;
		}
	}
	return ans;
}


void maxEdge(int u, int v, int num, int chain_heads[]) {
	int lca = LCA(u, v, num);
	int ans = max(crawl_tree(u, lca, num, chain_heads),
		crawl_tree(v, lca, num, chain_heads));
	cout << ans << '\n';
}

int main()
{
	memset(tree, -1, sizeof(tree));
	int n = 11;

	addEdge(1, 1, 2, 13);
	addEdge(2, 1, 3, 9);
	addEdge(3, 1, 4, 23);
	addEdge(4, 2, 5, 4);
	addEdge(5, 2, 6, 25);
	addEdge(6, 3, 7, 29);
	addEdge(7, 6, 8, 5);
	addEdge(8, 7, 9, 30);
	addEdge(9, 8, 10, 1);
	addEdge(10, 8, 11, 6);

	int root = 0, parent_of_root = -1, depth_of_root = 0;

	dfs(root, parent_of_root, depth_of_root, n);

	int chain_heads[MAXN];

	memset(chain_heads, -1, sizeof(chain_heads));

	int edge_counted = 0;

	int curr_chain = 0;

	hld(root, n - 1, &edge_counted, &curr_chain, n, chain_heads);

	construct_ST(0, edge_counted, 1);

	int u = 11, v = 9;
	cout << "Max edge between " << u << " and " << v << " is ";
	maxEdge(u - 1, v - 1, n, chain_heads);

	change(8 - 1, 28, n);

	cout << "After Change: max edge between " << u << " and "
		<< v << " is ";
	maxEdge(u - 1, v - 1, n, chain_heads);

	v = 4;
	cout << "Max edge between " << u << " and " << v << " is ";
	maxEdge(u - 1, v - 1, n, chain_heads);

	// Change value of edge number 5 (index 5-1) to 22 
	change(5 - 1, 22, n);
	cout << "After Change: max edge between " << u << " and "
		<< v << " is ";
	maxEdge(u - 1, v - 1, n, chain_heads);

	return 0;
}
*/