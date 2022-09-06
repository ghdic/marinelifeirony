void main() {
  Idol blackPink = Idol(
    '블랙핑크',
    ['지수', '제니', '리사', '로제']
  ); // new안써도 ㄱㅊ

  print(blackPink.name);
  blackPink.introduce();
}

class Idol {
  String name;
  List<String> members;

  Idol(String name, List<String> members)
      : this.name = name,
        this.members = members;

  void sayHello() {
    print('안녕하세요 $name입니다.');
  }

  void introduce() {
    print('저희 멤버는 $members가 있습니다');
  }
}
