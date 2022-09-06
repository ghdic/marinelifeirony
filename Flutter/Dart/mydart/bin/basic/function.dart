void main() {
  print(add(1, 2));
  print(add2(a: 10, b: 20));
  print(add3(100, 10));

}

int add(a, b) {
  return a + b;
}

int add2({required int a, required int b}) {
  return a + b;
}

int add3(a, b) => a + b;

// parameter / argument - 매개변수
// postional parameter = 순서가 중요한 파라미터
// optional parameter - 있어도 되고 없어도 되는 파라미터
// named parameter - 이름이 있는 파라미터 (순서가 중요하지 않다)
// arrow function - 화살표 함수
// call by reference 미지원