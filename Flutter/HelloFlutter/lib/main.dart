import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.lime,
        body: Center(
          child: Text('Hello World!',
            style: TextStyle(color: Colors.blueAccent, fontSize: 20),
          ),
        ),
      ),
    ),
  );
}
