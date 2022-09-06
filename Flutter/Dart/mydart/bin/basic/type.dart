void main() {
  int num = 10;
  print(num);
  print(num + 100);
  print(num / 4);

  double num2 = 2.5;
  bool check = true;
  String str = "mystr";
  var str2 = "mystr2";

  print(str.runtimeType);
  print(str2.runtimeType);
  print("$str $str2");

  dynamic name = "marinelife"; // var과 마찬가지로 모든 타입 선언o, but 선언타입 이후 타입을 바꿀수 있음

  print(name);

  dynamic n = 10;
  
  print(n);

  // nullable = null이 될 수 있다
  // non-nullable - null이 될 수 없다
  // null - 아무런 값도 있지 않다
  String? nickname = "life"; // 선언시 ? 붙이면 null이 될 수있다

  nickname = null;
  print(nickname);
  // print(nickname!); // 현재 이값은 null이 아니다, null 인경우 에러


  final String happy; // 첫 값 할당 후 변경 x
  happy = "life";
  print(happy);

  const String life = "happy"; // 말그대로 상수, String같은 자료형 따로 안붙여줘도 var역할 해줌
  print(happy);
}