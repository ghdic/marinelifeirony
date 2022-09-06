void main() {
  Operation op = add;
  int res = op(10, 20, 30);
  print(res);

  op = sub;
  int res2 = op(10, 20, 30);
  print(res2);

  print(calculate(30, 40 , 50, add));
}

typedef Operation = int Function(int x, int y, int z);

int add(int x, int y, int z) => x + y + z;

int sub(int x, int y, int z) => x - y - z;

int calculate(int x, int y, int z, Operation operation) {
  return operation(x, y, z);
}
