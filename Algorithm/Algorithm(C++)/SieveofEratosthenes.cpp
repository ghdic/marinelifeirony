// �����佺ü
/*
#include <iostream>
#include <vector>
using namespace std;

const int MAXN = 1000000;
bool check[MAXN + 1];
vector<int> prime;

void erathenes_sieve() {
	for (long long i = 2; i <= MAXN; ++i) {
		if (!check[i]) {
			prime.push_back(i);
			// i * i ���� ���� �ϴ� ������ i*2, i*3, i*4, ..., i*(i-1)�� ������ �� �˻�Ǿ��� ����
			// �Ҽ� 5���Ѵٰ� �Ҷ� 5*2, 5*3, 5*4�� �̹� ���� 2, 3, 4���� �˻簡 �Ǿ���.
			// MAXN�� 1e6�̱� ������ i * i �Ҷ� int������ �Ѵ´�
			// �̷��� ������ֱ� ���� ��� int j = i + i; << �� ������� ¥�� �ȴ�.
			for (long long j = i * i; j <= MAXN; j += i) {
				check[j] = true;
			}
		}
	}

	cout << "hi";
}

void print() {
	for (int p : prime)
		cout << p << '\n';
}
int main() {
	erathenes_sieve();
	print();
}
*/