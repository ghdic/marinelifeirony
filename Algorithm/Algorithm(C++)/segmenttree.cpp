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

/*
// 구간 합 세그
#include <iostream>
using namespace std;

const int MAXN = 10; // 최대 n크기가 10이라고 했을때 + 1(인덱스 0을 무시하고 짤때)
int tree[MAXN * 4]; // 최악의 경우 트리를 생성할때 약 n*4의 크기가 필요하다. 정적배열할땐 4배해주면 된다.
int node[MAXN + 1] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };


// 세그트리에 대한 정보가 한번에 주어지는 경우 node배열에 입력받아 한번에 초기트리를 생성하는 함수이다.
int init(int index, int start, int end) {
	// 시작지점과 끝이 같은 경우 리프노드인경우이다.
	// node에 담긴 값을 트리에 담고 값을 돌려준다.
	if (start == end)
		return tree[index] = node[start];
	// 리프노드가 아니라면 계속 뻗어나간다. 다 뻗어나간 후 구간합을 트리에 담는다.
	else {
		int mid = (start + end) / 2;
		return tree[index] = init(index * 2, start, mid) +
			init(index * 2 + 1, mid + 1, end);
	}
}

// 특정 인덱스의값이 diff만큼 바꿔었음을 업데이트 해준다.
void update(int index, int target, int diff, int start, int end) {
	if (target < start || target > end)
		return;
	tree[index] += diff;
	if (start == end)
		node[start] += diff; // 배열값 업데이트
	else {
		int mid = (start + end) / 2;
		update(index * 2, target, diff, start, mid);
		update(index * 2 + 1, target, diff, mid + 1, end);
	}
}

// left~right까지의 구간합을 구해준다,
int query(int index, int left, int right, int start, int end) {
	// 범위 벗어난경우 0반환
	if (left > end || right < start)
		return 0;
	// start, end가 범위 내이면 start~end구간합 반환
	// ex) 1~10의 구간합 구할때 3~7구간합 반환하면 1~2, 8~10구간합과 더하면됨
	if (left <= start && end <= right)
		return tree[index];
	else {
		int mid = (start + end) / 2;
		return query(index * 2, left, right, start, mid) +
			query(index * 2 + 1, left, right, mid + 1, end);
	}
}

int main() {
	init(1, 1, MAXN); // 세그트리 초기화
	// 2~5까지 합
	cout << "2부터 5까지의 구간합 " << query(1, 2, 5, 1, MAXN) << "\n";
	// 노드 4의값을 10으로 업데이트
	int target = 4, changeValue = 10;
	int diff = changeValue - node[target]; // 바뀌는 값과 차이를 구해줌
	update(1, target, diff, 1, MAXN);
	// 2 + 3 + 10 + 5 = 20
	cout << "2부터 5까지의 구간합 " << query(1, 2, 5, 1, MAXN) << "\n";
}
*/

/*
// 구간 곱 세그
// 곱세그의 경우 int 범위 넘기는 경우가 많다는걸 주의하자.
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

// 곱 같은 경우는 값이 바뀔경우 +,-처럼 업데이트가 안되구 해당구간 재연산해줘야한다.
// 따라서 타겟의 범위에 벗어난 경우 해당 구간합을 return해준다. 왜냐하면 (해당 구간곱) * (업데이트 된 결과)가 부모노드의 결과이기 때문이다.
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

// left~right까지의 구간곱을 구해준다,
int query(int index, int left, int right, int start, int end) {
	// 범위 벗어난경우 1반환(why? 1과 곱하면 값을 그대로~)
	if (left > end || right < start)
		return 1;
	// 구간 곱 반환
	if (left <= start && end <= right)
		return tree[index];
	else {
		int mid = (start + end) / 2;
		return query(index * 2, left, right, start, mid) *
			query(index * 2 + 1, left, right, mid + 1, end);
	}
}

int main() {
	init(1, 1, MAXN); // 세그트리 초기화
	// 2~5까지 곱
	cout << "2부터 5까지의 구간곱 " << query(1, 2, 5, 1, MAXN) << "\n";
	// 노드 4의값을 10으로 업데이트
	int target = 4, changeValue = 10;
	update(1, target, changeValue, 1, MAXN);
	// 2 * 3 * 10 * 5 = 300
	cout << "2부터 5까지의 구간곱 " << query(1, 2, 5, 1, MAXN) << "\n";
}
*/

/*
// 구간 MAX 세그
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

// max도 곱과 마찬가지로 값바뀔시 재연산 필요함
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

// left~right까지의 구간최대값을 구해준다,
int query(int index, int left, int right, int start, int end) {
	// 최대값을 구할것이니 최소값을 반환해주면된다(0이라 가정하고 넘겨주자, MIN인경우 INT_MAX같은 값이나 1e9넘겨주면 된다)
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
	init(1, 1, MAXN); // 세그트리 초기화
	// 2, 3, 10, 1
	cout << "2부터 5까지의 구간 최대값 " << query(1, 2, 5, 1, MAXN) << "\n";
	// 노드 4의값을 1으로 업데이트
	int target = 4, changeValue = 1;
	update(1, target, changeValue, 1, MAXN);
	// 2, 3, 1, 1
	cout << "2부터 5까지의 구간 최대값 " << query(1, 2, 5, 1, MAXN) << "\n";
}
*/

/*
// 최장 수열 LIS 구하기
#include <iostream>
#include <algorithm>
using namespace std;

const int MAXN = 10;

struct info {
	int val, idx;
	// 중복된 원소 처리를 위해 idx가 큰걸 우선처리 한다.
	bool operator < (const info& a) const {
		return (this->val == a.val ? this->idx > a.idx : this->val < a.val);
	}
};

int arr[MAXN + 1] = { 0, 10, 20, 10, 30, 20, 50, 60, 30, 40, 70 }; // 0인덱스는 버리는거로 가정
info node[MAXN + 1];
int tree[MAXN * 4];

void update(int index, int target, int value, int start, int end) {
	if (target < start || target > end)
		return;
	// 일반적인 구간최댓값을 구할땐 이렇게 하면 안된다.
	// 만약 기존 최댓값이 10이였는데 5로 바뀌었을때 구간 최댓값이 5로 업데이트 안되는 예외가 생길수 있다.
	// target이 포함된 노드의 최댓값을 업데이트 해준다고 생각하자.
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
	// 입력받은 값 기준으로 정렬
	sort(&node[1], &node[MAXN + 1]);

	// 값 작은 순서대로 업데이트
	for (int i = 1; i <= MAXN; ++i) {
		// 1~정렬전 인덱스값 범위에서 최댓값을 구함
		// 만약 값이 자신보다 작고, 정렬전 인덱스가 더 작았다면 MAX값으로 만나게됨
		int Max = query(1, 1, node[i].idx, 1, MAXN) + 1; // 찾은 MAX값에 + 1(자기 자신 포함)
		update(1, node[i].idx, Max, 1, MAXN); // 해당 MAX값을 정렬전 인덱스값에 업데이트
	}

	// 루트노드 출력
	// 10, 20, 10, 30, 20, 50, 60, 30, 40, 70
	// 10 20 30 50 60 70 -> 6
	cout << "최장 수열 길이 " << tree[1] << endl;
}
*/