// 에라토스체
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
			// i * i 부터 시작 하는 이유는 i*2, i*3, i*4, ..., i*(i-1)은 이전에 다 검사되었기 때문
			// 소수 5를한다고 할때 5*2, 5*3, 5*4는 이미 이전 2, 3, 4에서 검사가 되었다.
			// MAXN이 1e6이기 때문에 i * i 할때 int범위를 넘는다
			// 이런걸 고려해주기 싫은 경우 int j = i + i; << 이 방식으로 짜면 된다.
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