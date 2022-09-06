void main() {
  for (int i = 0; i < 10; i++) {
    print(i);
  }

  List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (int i = 0; i < numbers.length; i++) {
    print(i);
  }

  for (int num in numbers) {
    if (num == 5) continue;
    if (num == 8) break;
    print(num);
  }
}
