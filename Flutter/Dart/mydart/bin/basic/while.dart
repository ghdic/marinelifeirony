void main() {
  int total = 0;

  while (total < 10) {
    total += 1;
  }

  print(total);

  do {
    total += 1;
  } while (total < 10);

  print(total);
}
