/*
#include <iostream>
using namespace std;

struct node {
	int value;
	node* left;
	node* right;

	node(int key) : value(key) {
		left = NULL;
		right = NULL;
	}
};

class BinaryTree {
public:
	BinaryTree();
	~BinaryTree();

	void insert(int key); // 올바른 위치에 노드를 생성해 key를 집어넣는다.
	node* find(int key); // 해당 key를 가진 노드가 있는지 찾고 있으면 해당 노드를, 없으면 null을 반환한다.
	void preorder_print(); // 전위순회
	void inorder_print(); // 중위순회
	void postorder_print(); // 후위순회
	
private:
	node* root;

	void destroy_tree(node* leaf); // 순회하며 할당된 노드들을 삭제한다.
	void insert(int key, node* leaf);
	node* find(int key, node *leaf);
	void preorder_print(node* leaf); // root -> left -> right
	void inorder_print(node* leaf); // left -> root -> right
	void postorder_print(node* leaf); // left -> right -> root
	
};

BinaryTree::BinaryTree() {
	root = NULL;
}

BinaryTree::~BinaryTree() {
	destroy_tree(root);
}

void BinaryTree::destroy_tree(node* leaf) {
	if (leaf != NULL) {
		destroy_tree(leaf->left);
		destroy_tree(leaf->right);
		delete leaf;
	}
}

void BinaryTree::insert(int key) {
	if (root) insert(key, root);
	else root = new node(key);
}

void BinaryTree::insert(int key, node *leaf) {
	
	if (key < leaf->value) {
		if (leaf->left) insert(key, leaf->left);
		else leaf->left = new node(key);
	}
	else {
		if (leaf->right) insert(key, leaf->right);
		else leaf->right = new node(key);
	}
}

node* BinaryTree::find(int key) {
	return find(key, root);
}

node* BinaryTree::find(int key, node* leaf) {
	if (leaf == NULL)return NULL;

	if (key < leaf->value) {
		return find(key, leaf->left);
	}
	else if (key == leaf->value) {
		return leaf;
	}
	else {
		return find(key, leaf->right);
	}
}

void BinaryTree::preorder_print() {
	cout << "전위순회 :";
	preorder_print(root);
	cout << '\n';
}

void BinaryTree::preorder_print(node* leaf) {
	if (leaf == NULL)return;
	cout << ' ' << leaf->value;
	preorder_print(leaf->left);
	preorder_print(leaf->right);
}

void BinaryTree::inorder_print() {
	cout << "중위순회 :";
	inorder_print(root);
	cout << '\n';
}

void BinaryTree::inorder_print(node* leaf) {
	if (leaf == NULL)return;
	inorder_print(leaf->left);
	cout << ' ' << leaf->value;
	inorder_print(leaf->right);
}

void BinaryTree::postorder_print() {
	cout << "후위순회 :";
	postorder_print(root);
	cout << '\n';
}

void BinaryTree::postorder_print(node* leaf) {
	if (leaf == NULL)return;
	postorder_print(leaf->left);
	postorder_print(leaf->right);
	cout << ' ' << leaf->value;
}

int main() {
	BinaryTree* tree = new BinaryTree();

	tree->insert(10);
	tree->insert(6);
	tree->insert(14);
	tree->insert(5);
	tree->insert(8);
	tree->insert(11);
	tree->insert(18);
	tree->insert(13);

	node* k = tree->find(5);
	if (k)cout << "find!!" << k->value << '\n';
	else cout << "null!!\n";
	tree->preorder_print();
	tree->inorder_print();
	tree->postorder_print();

	delete tree;

	return 0;
}
*/