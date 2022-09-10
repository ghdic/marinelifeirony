void main() {
  List<String> blackPink = ['로제', '지수', '리사', '제니', '제니'];

  print(blackPink);
  print(blackPink.asMap());
  print(blackPink.toSet());

  Map blakcPinkMap = blackPink.asMap();

  print(blakcPinkMap.keys.toList());
  print(blakcPinkMap.values.toList());

  Set blackPinkSet = Set.from(blackPink);

  print(blackPinkSet.toList());
}
