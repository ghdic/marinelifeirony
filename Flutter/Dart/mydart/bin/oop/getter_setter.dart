void main() {
  Idol blackPink = Idol('블랙핑크', ['지수', '제니', '리사', '로제']);

  print(blackPink.firstMember);
  blackPink.firstMember = '인생마린';
  print(blackPink);
}

class Idol {
  String name;
  List<String> members;

  Idol(this.name, this.members);

  String get firstMember {
    return this.members[0];
  }

  set firstMember(String name) {
    this.members[0] = name;
  }

  @override
  String toString() {
    return '$name $members';
  }
}
