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

	void insert(int key); // �ùٸ� ��ġ�� ��带 ������ key�� ����ִ´�.
	node* find(int key); // �ش� key�� ���� ��尡 �ִ��� ã�� ������ �ش� ��带, ������ null�� ��ȯ�Ѵ�.
	void preorder_print(); // ������ȸ
	void inorder_print(); // ������ȸ
	void postorder_print(); // ������ȸ
	
private:
	node* root;

	void destroy_tree(node* leaf); // ��ȸ�ϸ� �Ҵ�� ������ �����Ѵ�.
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
	cout << "������ȸ :";
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
	cout << "������ȸ :";
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
	cout << "������ȸ :";
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