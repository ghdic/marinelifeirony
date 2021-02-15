/*
// 이진 트리 높이 구하기
#include <iostream>
#include <algorithm>
using namespace std;

struct node {
	int val;
	node* left, *right;
	node(int val) :val(val) { left = NULL, right = NULL; }
};

node* head;

node* find(node* root, int val) {
	if (root == NULL)
		return NULL;
	if (root->val == val)
		return root;
	node* ret = NULL;
	ret = find(root->left, val);
	if (ret)return ret;
	ret = find(root->right, val);
	return ret;
}

node* insert(node* root, int parent, int val, bool dir) {
	if (root == NULL) {
		root = new node(val);
		return root;
	}
	node* tmp = find(root, parent);
	if (dir)
		tmp->right = new node(val);
	else
		tmp->left = new node(val);
	return root;
}

int get_height(node* root) {
	if (root == NULL)return 0;
	return max(get_height(root->left), get_height(root->right)) + 1;
}

int main() {
	head = insert(head, 0, 1, false);
	insert(head, 1, 2, false);
	insert(head, 1, 3, true);
	insert(head, 2, 4, false);
	insert(head, 2, 5, true);
	insert(head, 3, 6, false);
	insert(head, 3, 7, true);
	insert(head, 6, 8, true);

	for (int i = 1; i <= 8; ++i) {
		node* n = find(head, i);
		int l = get_height(n->left);
		int r = get_height(n->right);
		if (l != 0 || r != 0)
			cout << i << "의 자식 => ";
		if (l != 0)
			cout << l << " ";
		if (r != 0)
			cout << r;
		if(l != 0 || r != 0)
		cout << "\n";
	}
	return 0;
}
*/