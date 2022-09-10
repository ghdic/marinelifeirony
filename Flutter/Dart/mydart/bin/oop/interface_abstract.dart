void main() {
  BoyGroup bts = BoyGroup('BTS');
  GirlGroup redVelvet = GirlGroup('레드벨벳');
  IdolInterface blackPink = IdolInterface('블랙핑크');
  // IdolAbstract blackPink2 = IdolAbstract('블랙핑크'); // error

  print(bts is IdolInterface);
  print(bts is BoyGroup);
  print(bts is GirlGroup);
}

// interface
// 특정한 구조를 강제함
class IdolInterface {
  String name;

  IdolInterface(this.name);

  void sayName() {}
}

// abstract
// instance 생성x
abstract class IdolAbstract {
  String name;

  IdolAbstract(this.name);

  void sayName() {}
}

class MixGroup implements IdolAbstract {
  String name;

  MixGroup(this.name);

  void sayName() {
    print('제 이름은 $name입니다.');
  }
}

class BoyGroup implements IdolInterface {
  String name;

  BoyGroup(this.name);

  void sayName() {
    print('제 이름은 $name입니다.');
  }
}

class GirlGroup implements IdolInterface {
  String name;

  GirlGroup(this.name);

  void sayName() {
    print('제 이름은 $name입니다.');
  }
}
