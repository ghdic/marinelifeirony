void main() {
  List<String> idol = ['소녀시대', '원더걸스', '블랙핑크'];

  print(idol);
  print(idol[0]);

  print(idol.length);
  idol.add('Fx');
  idol.remove('원더걸스');
  print(idol);
  print(idol.indexOf('블랙핑크'));
}
