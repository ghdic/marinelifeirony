void main() {}

// 상속 - inheritance
class Idol {
  String name;
  int membersCount;

  Idol({required this.name, required this.membersCount});

  void sayName() {
    print('저는 ${this.name}입니다');
  }

  void sayMembersCount() {
    print('${this.name}은 ${this.membersCount}명의 멤버가 있습니다');
  }
}

class BoyGroup extends Idol {
  BoyGroup(
    String name,
    int membersCount,
  ) : super(name: name, membersCount: membersCount);

  void sayMale() {
    print('저는 남자 아이돌입니다');
  }
}

class GirlGroup extends Idol {
  GirlGroup(String name, int membersCount)
      : super(name: name, membersCount: membersCount);

  void sayFemale() {
    print('저는 여자 아이돌입니다');
  }

  @override
  void sayName() {
    super.sayName();
    print('저는 여자아이돌 ${this.name}입니다');
  }
}
