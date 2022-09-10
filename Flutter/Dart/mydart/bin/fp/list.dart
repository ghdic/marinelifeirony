void main() {
  List<Map<String, String>> people = [
    {'name': '로제', 'group': '블랙핑크'},
    {'name': '지수', 'group': '블랙핑크'},
    {'name': 'RM', 'group': 'BTS'},
    {'name': '뷔', 'group': 'BTS'},
  ];

  print(people);

  final blackPink = people.where((x) => x['group'] == '블랙핑크').toList();
  final bts = people.where((x) => x['group'] == 'BTS').toList();

  print(blackPink);
  print(bts);

  List<int> numbers = [1, 3, 5, 7, 9];

  // reduce는 prev에 처음 첫번째값이 들어감
  final result = numbers.reduce((prev, next) {
    print(' ==========');
    print('previous : $prev');
    print('next: $next');
    print('total: ${prev + next}');

    return prev + next;
  });

  print(result);

  // fold는 리턴타입 지정, 첫번째 파라미터가 prev값으로 처음 들어감
  final sum = numbers.fold<int>(0, (prev, next) => prev + next);

  List<int> even = [2, 4, 6, 8];
  List<int> odd = [1, 3, 5, 7];

  print([...even, ...odd]);
}
