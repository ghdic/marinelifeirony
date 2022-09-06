void main() {
  Map<String, String> dict = {'Marine': 'life', 'Hello': 'world'};
  print(dict);
  dict['help'] = 'me';
  print(dict);
  dict.addAll({'may': 'be', 'thank': 'you'});
  print(dict);

  print(dict.keys);
  print(dict.values);

  dict.remove('may');
}
