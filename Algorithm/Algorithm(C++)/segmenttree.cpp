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
		//���Ϸ��� ������ �ۿ� �ִ� ���
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
		// b��° ���� c�� �ٲ�
		if (distance[i][0] == 1) {
			long long diff = distance[i][2] - A[distance[i][1]-1];
			A[distance[i][1] - 1] = distance[i][2];
			st.update(distance[i][1] - 1, diff, 0, 0, 5 - 1);
		}
		// b���� c���� ���� �� ����
		else {
			for (int i = 0; i < 5; ++i)
				cout << A[i] << ' ';
			cout << '\n';
			cout << distance[i][1] << "���� " << distance[i][2] << "������ �� " 
				<< st.getSum(0, 0, 5 - 1, distance[i][1] - 1, distance[i][2] - 1) << '\n';
		}
	}
}
*/

/*
// ���� �� ����
#include <iostream>
using namespace std;

const int MAXN = 10; // �ִ� nũ�Ⱑ 10�̶�� ������ + 1(�ε��� 0�� �����ϰ� ©��)
int tree[MAXN * 4]; // �־��� ��� Ʈ���� �����Ҷ� �� n*4�� ũ�Ⱑ �ʿ��ϴ�. �����迭�Ҷ� 4�����ָ� �ȴ�.
int node[MAXN + 1] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };


// ����Ʈ���� ���� ������ �ѹ��� �־����� ��� node�迭�� �Է¹޾� �ѹ��� �ʱ�Ʈ���� �����ϴ� �Լ��̴�.
int init(int index, int start, int end) {
	// ���������� ���� ���� ��� ��������ΰ���̴�.
	// node�� ��� ���� Ʈ���� ��� ���� �����ش�.
	if (start == end)
		return tree[index] = node[start];
	// ������尡 �ƴ϶�� ��� �������. �� ����� �� �������� Ʈ���� ��´�.
	else {
		int mid = (start + end) / 2;
		return tree[index] = init(index * 2, start, mid) +
			init(index * 2 + 1, mid + 1, end);
	}
}

// Ư�� �ε����ǰ��� diff��ŭ �ٲ������ ������Ʈ ���ش�.
void update(int index, int target, int diff, int start, int end) {
	if (target < start || target > end)
		return;
	tree[index] += diff;
	if (start == end)
		node[start] += diff; // �迭�� ������Ʈ
	else {
		int mid = (start + end) / 2;
		update(index * 2, target, diff, start, mid);
		update(index * 2 + 1, target, diff, mid + 1, end);
	}
}

// left~right������ �������� �����ش�,
int query(int index, int left, int right, int start, int end) {
	// ���� ������ 0��ȯ
	if (left > end || right < start)
		return 0;
	// start, end�� ���� ���̸� start~end������ ��ȯ
	// ex) 1~10�� ������ ���Ҷ� 3~7������ ��ȯ�ϸ� 1~2, 8~10�����հ� ���ϸ��
	if (left <= start && end <= right)
		return tree[index];
	else {
		int mid = (start + end) / 2;
		return query(index * 2, left, right, start, mid) +
			query(index * 2 + 1, left, right, mid + 1, end);
	}
}

int main() {
	init(1, 1, MAXN); // ����Ʈ�� �ʱ�ȭ
	// 2~5���� ��
	cout << "2���� 5������ ������ " << query(1, 2, 5, 1, MAXN) << "\n";
	// ��� 4�ǰ��� 10���� ������Ʈ
	int target = 4, changeValue = 10;
	int diff = changeValue - node[target]; // �ٲ�� ���� ���̸� ������
	update(1, target, diff, 1, MAXN);
	// 2 + 3 + 10 + 5 = 20
	cout << "2���� 5������ ������ " << query(1, 2, 5, 1, MAXN) << "\n";
}
*/

/*
// ���� �� ����
// �������� ��� int ���� �ѱ�� ��찡 ���ٴ°� ��������.
#include <iostream>
using namespace std;
const int MAXN = 10;

int node[MAXN + 1] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
int tree[MAXN * 4];

int init(int index, int start, int end) {
	if (start == end)
		return tree[index] = node[start];
	else {
		int mid = (start + end) / 2;
		return tree[index] = init(index * 2, start, mid) *
			init(index * 2 + 1, mid + 1, end);
	}
}

// �� ���� ���� ���� �ٲ��� +,-ó�� ������Ʈ�� �ȵǱ� �ش籸�� �翬��������Ѵ�.
// ���� Ÿ���� ������ ��� ��� �ش� �������� return���ش�. �ֳ��ϸ� (�ش� ������) * (������Ʈ �� ���)�� �θ����� ����̱� �����̴�.
int update(int index, int target, int value, int start, int end) {
	if (target < start || target > end)
		return tree[index];
	if (start == end)
		return tree[index] = node[start] = value;
	else {
		int mid = (start + end) / 2;
		return tree[index] = update(index * 2, target, value, start, mid) *
			update(index * 2 + 1, target, value, mid + 1, end);
	}
}

// left~right������ �������� �����ش�,
int query(int index, int left, int right, int start, int end) {
	// ���� ������ 1��ȯ(why? 1�� ���ϸ� ���� �״��~)
	if (left > end || right < start)
		return 1;
	// ���� �� ��ȯ
	if (left <= start && end <= right)
		return tree[index];
	else {
		int mid = (start + end) / 2;
		return query(index * 2, left, right, start, mid) *
			query(index * 2 + 1, left, right, mid + 1, end);
	}
}

int main() {
	init(1, 1, MAXN); // ����Ʈ�� �ʱ�ȭ
	// 2~5���� ��
	cout << "2���� 5������ ������ " << query(1, 2, 5, 1, MAXN) << "\n";
	// ��� 4�ǰ��� 10���� ������Ʈ
	int target = 4, changeValue = 10;
	update(1, target, changeValue, 1, MAXN);
	// 2 * 3 * 10 * 5 = 300
	cout << "2���� 5������ ������ " << query(1, 2, 5, 1, MAXN) << "\n";
}
*/

/*
// ���� MAX ����
#include <iostream>
#include <algorithm>
using namespace std;
const int MAXN = 10;

int node[MAXN + 1] = { 0, 5, 2, 3, 10, 1, 6, 7, 8, 9, 4 };
int tree[MAXN * 4];

int init(int index, int start, int end) {
	if (start == end)
		return tree[index] = node[start];
	else {
		int mid = (start + end) / 2;
		return tree[index] = max(init(index * 2, start, mid),
			init(index * 2 + 1, mid + 1, end));
	}
}

// max�� ���� ���������� ���ٲ�� �翬�� �ʿ���
int update(int index, int target, int value, int start, int end) {
	if (target < start || target > end)
		return tree[index];
	if (start == end)
		return tree[index] = node[start] = value;
	else {
		int mid = (start + end) / 2;
		return max(tree[index] = update(index * 2, target, value, start, mid),
			update(index * 2 + 1, target, value, mid + 1, end));
	}
}

// left~right������ �����ִ밪�� �����ش�,
int query(int index, int left, int right, int start, int end) {
	// �ִ밪�� ���Ұ��̴� �ּҰ��� ��ȯ���ָ�ȴ�(0�̶� �����ϰ� �Ѱ�����, MIN�ΰ�� INT_MAX���� ���̳� 1e9�Ѱ��ָ� �ȴ�)
	if (left > end || right < start)
		return 0;
	if (left <= start && end <= right)
		return tree[index];
	else {
		int mid = (start + end) / 2;
		return max(query(index * 2, left, right, start, mid),
			query(index * 2 + 1, left, right, mid + 1, end));
	}
}

int main() {
	init(1, 1, MAXN); // ����Ʈ�� �ʱ�ȭ
	// 2, 3, 10, 1
	cout << "2���� 5������ ���� �ִ밪 " << query(1, 2, 5, 1, MAXN) << "\n";
	// ��� 4�ǰ��� 1���� ������Ʈ
	int target = 4, changeValue = 1;
	update(1, target, changeValue, 1, MAXN);
	// 2, 3, 1, 1
	cout << "2���� 5������ ���� �ִ밪 " << query(1, 2, 5, 1, MAXN) << "\n";
}
*/

/*
// ���� ���� LIS ���ϱ�
#include <iostream>
#include <algorithm>
using namespace std;

const int MAXN = 10;

struct info {
	int val, idx;
	// �ߺ��� ���� ó���� ���� idx�� ū�� �켱ó�� �Ѵ�.
	bool operator < (const info& a) const {
		return (this->val == a.val ? this->idx > a.idx : this->val < a.val);
	}
};

int arr[MAXN + 1] = { 0, 10, 20, 10, 30, 20, 50, 60, 30, 40, 70 }; // 0�ε����� �����°ŷ� ����
info node[MAXN + 1];
int tree[MAXN * 4];

void update(int index, int target, int value, int start, int end) {
	if (target < start || target > end)
		return;
	// �Ϲ����� �����ִ��� ���Ҷ� �̷��� �ϸ� �ȵȴ�.
	// ���� ���� �ִ��� 10�̿��µ� 5�� �ٲ������ ���� �ִ��� 5�� ������Ʈ �ȵǴ� ���ܰ� ����� �ִ�.
	// target�� ���Ե� ����� �ִ��� ������Ʈ ���شٰ� ��������.
	tree[index] = max(tree[index], value);
	if (start != end) {
		int mid = (start + end) / 2;
		update(index * 2, target, value, start, mid);
		update(index * 2 + 1, target, value, mid + 1, end);
	}
}

int query(int index, int left, int right, int start, int end) {
	if(left > end || right < start)
		return 0;
	if (left <= start && end <= right)
		return tree[index];
	else {
		int mid = (start + end) / 2;
		return max(query(index * 2, left, right, start, mid),
			query(index * 2 + 1, left, right, mid + 1, end));
	}
}

int main() {
	for (int i = 1; i <= MAXN; ++i) {
		node[i].val = arr[i];
		node[i].idx = i;
	}
	// �Է¹��� �� �������� ����
	sort(&node[1], &node[MAXN + 1]);

	// �� ���� ������� ������Ʈ
	for (int i = 1; i <= MAXN; ++i) {
		// 1~������ �ε����� �������� �ִ��� ����
		// ���� ���� �ڽź��� �۰�, ������ �ε����� �� �۾Ҵٸ� MAX������ �����Ե�
		int Max = query(1, 1, node[i].idx, 1, MAXN) + 1; // ã�� MAX���� + 1(�ڱ� �ڽ� ����)
		update(1, node[i].idx, Max, 1, MAXN); // �ش� MAX���� ������ �ε������� ������Ʈ
	}

	// ��Ʈ��� ���
	// 10, 20, 10, 30, 20, 50, 60, 30, 40, 70
	// 10 20 30 50 60 70 -> 6
	cout << "���� ���� ���� " << tree[1] << endl;
}
*/