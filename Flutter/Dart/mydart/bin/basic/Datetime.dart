void main() {
  DateTime now = DateTime.now();

  print(now);

  final DateTime now2 = DateTime.now();

  // const DateTime now3 = DateTime.now(); // error: 빌드전부터 아는 값이여야함(빌트타임의 값을 알고있어야함)
}