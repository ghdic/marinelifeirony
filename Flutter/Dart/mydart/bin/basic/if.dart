

void main() {
  int number = 2;

  if (number < 10) {
    print("$number은 10보다 작다");
  }

  switch (number % 3) {
    case 0:
      print('나머지가 없습니다');
      break;
    case 1:
      print('나머지가 1입니다');
      break;
    default:
      print("나머지가 2입니다");
  }
}
