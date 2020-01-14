/*
#include <iostream>
#include <cmath>
using namespace std;

class SegmentTree
{
private:
	long long* nodes;
	long long* A;

	long long init(int index, int start, int end)
	{
		if (start == end)
			nodes[index] = A[start];
		else
			nodes[index] =
			init(2 * index + 1, start, (start + end) / 2) +
			init(2 * index + 2, (start + end) / 2 + 1, end);

		return nodes[index];
	}
public:
	SegmentTree(int N, long long* A) {
		int h = (int)ceil(log2(N));
		int node_size = 1 << (h + 1);
		nodes = new long long[node_size];

		this->A = A;
		init(0, 0, N - 1);
	}
	~SegmentTree() {
		delete[] nodes;
	}
	long long getSum(int index, int start, int end, int left, int right)
	{
		//구하려는 범위가 밖에 있는 경우
		if (left > end || right < start)
			return 0;
		else if (left <= start && right >= end)
			return nodes[index];

		int mid = (start + end) / 2;
		return getSum(index * 2 + 1, start, mid, left, right) +
			getSum(index * 2 + 2, mid + 1, end, left, right);
	}
	void update(int changed_index, long long diff, int index, int start, int end)
	{
		if (changed_index < start || changed_index > end)
			return;

		nodes[index] += diff;

		if (start != end) {
			int mid = (start + end) / 2;
			update(changed_index, diff, index * 2 + 1, start, mid);
			update(changed_index, diff, index * 2 + 2, mid + 1, end);
		}
	}
};

int main() {
	long long A[5] = { 1, 2, 3, 4, 5 };
	int distance[4][3] = {
		{1, 3, 6},
		{2, 2, 5},
		{1, 5, 2},
		{2, 3, 5}
	};

	SegmentTree st(5, A);

	for (int i = 0; i < 4; ++i) {
		// b번째 수를 c로 바꿈
		if (distance[i][0] == 1) {
			long long diff = distance[i][2] - A[distance[i][1]-1];
			A[distance[i][1] - 1] = distance[i][2];
			st.update(distance[i][1] - 1, diff, 0, 0, 5 - 1);
		}
		// b부터 c까지 수의 합 구함
		else {
			for (int i = 0; i < 5; ++i)
				cout << A[i] << ' ';
			cout << '\n';
			cout << distance[i][1] << "부터 " << distance[i][2] << "까지의 합 " 
				<< st.getSum(0, 0, 5 - 1, distance[i][1] - 1, distance[i][2] - 1) << '\n';
		}
	}
}
*/