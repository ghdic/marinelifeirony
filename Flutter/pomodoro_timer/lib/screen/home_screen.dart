import 'dart:async';

import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:numberpicker/numberpicker.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';
import 'dart:math' as math;
import 'package:sprintf/sprintf.dart';

enum TimerStatus { running, paused, stopped, resting }

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  static const WORK_SECONDS = 25 * 60;
  static const REST_SECONDS = 5 * 60;

  late TimerStatus _timerStatus;
  late int _timer;
  late int _pomodoroCount;

  @override
  void initState() {
    super.initState();
    _timerStatus = TimerStatus.stopped;
    print(_timerStatus.toString());
    _timer = WORK_SECONDS;
    _pomodoroCount = 0;
  }

  void run() {
    setState(() {
      _timerStatus = TimerStatus.running;
      print("[=>] " + _timerStatus.toString());
      runTimer();
    });
  }

  void rest() {
    setState(() {
      _timer = REST_SECONDS;
      _timerStatus = TimerStatus.resting;
      print("[=>] " + _timerStatus.toString());
    });
  }

  void pause() {
    setState(() {
      _timerStatus = TimerStatus.paused;
      print("[=>] " + _timerStatus.toString());
    });
  }

  void resume() {
    run();
  }

  void stop() {
    setState(() {
      _timer = WORK_SECONDS;
      _timerStatus = TimerStatus.stopped;
      print("[=>] " + _timerStatus.toString());
    });
  }

  void runTimer() async {
    Timer.periodic(Duration(seconds: 1), (Timer t) {
      switch (_timerStatus) {
        case TimerStatus.paused:
          t.cancel();
          break;
        case TimerStatus.stopped:
          t.cancel();
          break;
        case TimerStatus.running:
          if (_timer <= 0) {
            showToast("작업 완료!");
            rest();
          } else {
            setState(() {
              _timer -= 1;
            });
          }
          break;
        case TimerStatus.resting:
          if (_timer <= 0) {
            setState(() {
              _pomodoroCount += 1;
            });
            showToast("오늘 $_pomodoroCount개의 뽀모도로를 달성했습니다.");
            t.cancel();
            stop();
          } else {
            setState(() {
              _timer -= 1;
            });
          }
          break;
        default:
          break;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final List<Widget> _runningButtons = [
      ElevatedButton(
        child: Text(
          _timerStatus == TimerStatus.paused ? '계속하기' : '일시정지',
          style: TextStyle(color: Colors.white, fontSize: 16),
        ),
        style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
        onPressed: _timerStatus == TimerStatus.paused ? resume : pause,
      ),
      Padding(
        padding: EdgeInsets.all(20),
      ),
      ElevatedButton(
        child: Text(
          '포기하기',
          style: TextStyle(fontSize: 16),
        ),
        style: ElevatedButton.styleFrom(backgroundColor: Colors.grey),
        onPressed: stop,
      ),
    ];
    final List<Widget> _stoppedButtons = [
      ElevatedButton(
        child: Text(
          '시작하기',
          style: TextStyle(color: Colors.white, fontSize: 16),
        ),
        style: ElevatedButton.styleFrom(
          backgroundColor:
              _timerStatus == TimerStatus.resting ? Colors.green : Colors.blue,
        ),
        onPressed: run,
      ),
    ];

    return Scaffold(
      body: SafeArea(
        child: Container(
          decoration: BoxDecoration(
              gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [Colors.red, Colors.purple.shade400])),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              PomodoroTimer(
                timer: _timer,
                changeTime: changeTime,
              ),
              SizedBox(
                height: 40.0,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: _timerStatus == TimerStatus.resting
                    ? const []
                    : _timerStatus == TimerStatus.stopped
                        ? _stoppedButtons
                        : _runningButtons,
              )
            ],
          ),
        ),
      ),
    );
  }

  void showToast(String message) {
    Fluttertoast.showToast(
      msg: message,
      toastLength: Toast.LENGTH_LONG,
      gravity: ToastGravity.BOTTOM,
      timeInSecForIosWeb: 5,
      backgroundColor: Colors.grey,
      textColor: Colors.white,
      fontSize: 16.0,
    );
  }

  void changeTime() async {
    if (_timerStatus == TimerStatus.running ||
        _timerStatus == TimerStatus.resting) {
      return;
    }

    final int? result = await showModalBottomSheet(
        context: context,
        builder: (_) {
          return _TimeSetter(
            minutes: _timer ~/ 60,
            seconds: _timer % 60,
          );
        });
    if (result != null) {
      setState(() {
        _timer = result;
      });
    }
  }
}

class _TimeSetter extends StatefulWidget {
  int minutes;
  int seconds;
  _TimeSetter({Key? key, required this.minutes, required this.seconds})
      : super(key: key);

  @override
  State<_TimeSetter> createState() => _TimeSetterState();
}

class _TimeSetterState extends State<_TimeSetter> {
  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 30.0, top: 20.0),
          child: Text(
            '타이머 설정',
            style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.w600),
          ),
        ),
        Padding(
          padding: const EdgeInsets.symmetric(vertical: 20.0, horizontal: 50.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Column(
                children: [
                  const Text(
                    '분',
                    style: TextStyle(
                        color: Color(0xffff5252),
                        fontSize: 18.0,
                        fontWeight: FontWeight.w600),
                  ),
                  SizedBox(
                    height: 20.0,
                  ),
                  NumberPicker(
                    value: widget.minutes,
                    minValue: 0,
                    maxValue: 60,
                    infiniteLoop: true,
                    onChanged: (value) =>
                        setState(() => widget.minutes = value),
                  ),
                ],
              ),
              Column(
                children: [
                  const Text(
                    '초',
                    style: TextStyle(
                        color: Color(0xffff5252),
                        fontSize: 18.0,
                        fontWeight: FontWeight.w600),
                  ),
                  SizedBox(
                    height: 20.0,
                  ),
                  NumberPicker(
                    value: widget.seconds,
                    minValue: 0,
                    maxValue: 59,
                    infiniteLoop: true,
                    onChanged: (value) =>
                        setState(() => widget.seconds = value),
                  ),
                ],
              )
            ],
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(16.0),
          child: ElevatedButton(
              style: ButtonStyle(
                  shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                      RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8.0),
                          side: BorderSide(color: Colors.red))),
                  backgroundColor:
                      MaterialStateProperty.all(Color(0xffff5252))),
              onPressed: () {
                Navigator.pop(context, widget.minutes * 60 + widget.seconds);
              },
              child: Text(
                '저장',
                style: TextStyle(color: Colors.white),
              )),
        )
      ],
    );
  }
}

class PomodoroTimer extends StatelessWidget {
  final int timer;
  final GestureTapCallback changeTime;

  const PomodoroTimer({Key? key, required this.timer, required this.changeTime})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    print("timer $timer");
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: <Widget>[
        CircularStepProgressIndicator(
          totalSteps: 24,
          currentStep: (timer / 150).toInt(),
          stepSize: 20,
          selectedColor: Colors.redAccent,
          unselectedColor: Colors.white,
          padding: math.pi / 15,
          width: 350,
          height: 350,
          startingAngle: -math.pi / 120,
          child: Center(
              child: GestureDetector(
            onTap: changeTime,
            child: Text(
              secondsToString(timer),
              style: TextStyle(
                  fontSize: 80.0,
                  color: Colors.white,
                  fontWeight: FontWeight.w300),
            ),
          )),
        )
      ],
    );
  }

  String secondsToString(int seconds) {
    return sprintf("%02d:%02d", [seconds ~/ 60, seconds % 60]);
  }
}
