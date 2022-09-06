void main() {
  final Set<String> names = {'Marine Life', 'FLutter', 'Hello'};

  print(names);

  names.add('World');
  print(names);

  names.remove('Flutter');
  print(names);

  print(names.contains('Flutter'));
}
