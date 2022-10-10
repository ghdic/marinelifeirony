import 'package:flutter/material.dart';

class CircularBoundary extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CircularBoundary({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width ?? 100,
      height: height ?? 10,
      decoration: BoxDecoration(
        color: color ?? const Color(0xFFCBD5E1),
        borderRadius: BorderRadius.circular(10.0),
      ),
    );
  }
}
