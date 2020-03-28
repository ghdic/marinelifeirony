/*
	트라이(Trie) 자료구조
	문자열을 O(m)으로 서치하게 해줌
	
*/

/*
#include <iostream>
#include <string>
#include <cstring>
using namespace std;

const int ALPHABT_SIZE = 26;

// 알파벳 소문자만 받는다는 가정하에 만들어진 Trie 알고리즘
struct Trie {
	Trie* children[ALPHABT_SIZE];
	bool isEndOfWord;

	Trie() {
		memset(this->children, NULL, sizeof(this->children));
		this->isEndOfWord = false;
	}
	~Trie() {
		for (int i = 0; i < ALPHABT_SIZE; ++i)
			if (this->children[i])
				delete this->children[i];
	}

	// 문자열을 포인터로 접근하는 재귀방식
	void insert(const char* key) {
		if (*key == '\0')
			isEndOfWord = true;
		else {
			int cur = *key - 'a';
			if (children[cur] == NULL)
				children[cur] = new Trie();
			insert(children[cur], key + 1);
		}
	}

	// 문자열을 인덱스로 접근하는 반복문 방식
	void insert(Trie* root, string key) {
		Trie* pNode = root;
		for (int i = 0; i < key.length(); ++i) {
			int index = key[i] - 'a';
			if (!pNode->children[index])
				pNode->children[index] = new Trie();
			pNode = pNode->children[index];
		}
		pNode->isEndOfWord = true;
	}

	bool search(const char* key) {
		if (this->isEndOfWord && *key == '\0')
			return true;
		else if (*key == '\0')
			return false;
		int cur = *key - 'a';
		if (this->children[cur] == NULL)return false;
		return this->children[cur]->search(key + 1);
	}

	bool search(Trie* root, string key) {
		Trie* pNode = root;

		for (int i = 0; i < key.length(); ++i) {
			int index = key[i] - 'a';
			if (pNode->children[index] == NULL)
				return false;
			pNode = pNode->children[index];
		}
		return (pNode != NULL && pNode->isEndOfWord);
	}
};

int main() {
	Trie* root = new Trie();
	string key[] = { "marinelife", "god", "fan", "algorithm", "trie", "abs", "any" };
	
	int sz = sizeof(key) / sizeof(key[0]);
	
	for (int i = 0; i < sz; ++i) {
		root->insert(root, key[i]);
	}
	root->search(root, "marine") ? cout << "Yes!\n" : cout << "No!\n";
	root->search(root, "marinelife") ? cout << "Yes!\n" : cout << "No!\n";
	root->search(root, "godfan") ? cout << "Yes!\n" : cout << "No!\n";
	root->search(root, "algorithm") ? cout << "Yes!\n" : cout << "No!\n";
	root->search(root, "any") ? cout << "Yes!\n" : cout << "No!\n";
	cout << "\n\n";

	Trie* root2 = new Trie();
	const char *words[] = { "marinelife", "god", "fan", "algorithm", "trie", "abs", "any" };

	for (int i = 0; i < sz; ++i) {
		root2->insert(words[i]);
	}
	root2->search("marine") ? cout << "Yes!\n" : cout << "No!\n";
	root2->search("marinelife") ? cout << "Yes!\n" : cout << "No!\n";
	root2->search("godfan") ? cout << "Yes!\n" : cout << "No!\n";
	root2->search("algorithm") ? cout << "Yes!\n" : cout << "No!\n";
	root2->search("any") ? cout << "Yes!\n" : cout << "No!\n";
	cout << "\n\n";
}
*/