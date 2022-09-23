import 'dart:math';

import 'package:flutter/material.dart';
import 'package:random_number_generator/component/numberRow.dart';
import 'package:random_number_generator/constant/color.dart';
import 'package:random_number_generator/screen/settings.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int maxNumber = 1000;
  List<int> randomNumbers = [123, 456, 789];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: PRIMARY_COLOR,
        body: SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: Column(
              children: [
                _Header(
                  onPresssed: onSettingsPop,
                ),
                _Body(
                  randomNumbers: randomNumbers,
                ),
                _Footer(onPressed: onRandomNumberGenerate)
              ],
            ),
          ),
        ));
  }

  void onRandomNumberGenerate() {
    final rand = Random();
    final Set<int> newNumbers = {};
    while (newNumbers.length != 3) {
      final num = rand.nextInt(maxNumber);

      newNumbers.add(num);
    }

    setState(() {
      randomNumbers = newNumbers.toList();
    });
  }

  void onSettingsPop() async {
    final result = await Navigator.of(context)
        .push<int>(MaterialPageRoute(builder: (BuildContext context) {
      return SettingsScreen(
        maxNumber: maxNumber,
      );
    }));

    if (result != null) {
      setState(() {
        maxNumber = result;
      });
    }
  }
}

class _Header extends StatelessWidget {
  final VoidCallback onPresssed;
  const _Header({required this.onPresssed, Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
      Text(
        '랜덤숫자 생성기',
        style: TextStyle(
            color: Colors.white, fontSize: 30.0, fontWeight: FontWeight.w700),
      ),
      IconButton(
        onPressed: onPresssed,
        icon: Icon(Icons.settings),
        color: RED_COLOR,
      )
    ]);
  }
}

class _Body extends StatelessWidget {
  final List<int> randomNumbers;

  const _Body({Key? key, required this.randomNumbers}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: SizedBox(
        width: double.infinity,
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: randomNumbers
                .asMap()
                .entries
                .map((x) => Padding(
                      padding: EdgeInsets.only(bottom: x.key == 2 ? 0 : 16.0),
                      child: NumberRow(
                        number: x.value,
                      ),
                    ))
                .toList()),
      ),
    );
  }
}

class _Footer extends StatelessWidget {
  final VoidCallback onPressed;
  const _Footer({required this.onPressed, Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
        width: double.infinity,
        child: ElevatedButton(
            style: ElevatedButton.styleFrom(backgroundColor: RED_COLOR),
            onPressed: onPressed,
            child: Text('생성하기!')));
  }
}
