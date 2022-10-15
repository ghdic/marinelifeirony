import 'package:calendar_view/calendar_view.dart';
import 'package:flutter/material.dart';
import 'package:myflutter/screen/calendar_view_screen.dart';
import 'package:myflutter/screen/home_screen.dart';

void main() {
  runApp(CalendarControllerProvider(
      controller: EventController(),
      child: MaterialApp(
        home: CalendarViewScreen(),
        debugShowCheckedModeBanner: false,
        theme: ThemeData.light(),
      )));
}
