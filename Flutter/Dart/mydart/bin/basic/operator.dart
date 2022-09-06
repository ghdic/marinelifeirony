void main() {
  int num = 2;
  print(num);
  print(num + 2);
  print(num - 2);
  print(num * 2);
  print(num / 2); // int to double

  print('--------------------------------');
  print(num % 2);
  print(num % 3);

  num++;
  print(num);
  num--;
  print(num);
  num += 2;
  print(num);

  double? f = 4.0;
  print(f);
  f = 2.0;
  f = null;
  print(f);

  f ??= 10.0; // null인 경우 10으로 바꾸어라
  print(f);

  print(1 < 3);
  print(12 > 10 && 1 > 0);

  print(num is int);
  print(num is String);
  print(num is! String);
}
