import 'package:calender_scheduler/component/calendar.dart';
import 'package:calender_scheduler/component/today_banner.dart';
import 'package:flutter/material.dart';
import 'package:get_it/get_it.dart';

import '../component/schedule_bottom_sheet.dart';
import '../component/schedule_card.dart';
import '../const/colors.dart';
import '../database/drift_database.dart';
import '../model/schedule_with_color.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  DateTime selectedDay = DateTime.utc(
    DateTime.now().year,
    DateTime.now().month,
    DateTime.now().day,
  );
  DateTime focusedDay = DateTime.now();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: renderFloatingActionButton(),
      body: SafeArea(
        child: Column(
          children: [
            Calendar(
              selectedDay: selectedDay,
              focusedDay: focusedDay,
              onDaySelected: onDaySelected,
            ),
            SizedBox(height: 8.0),
            TodayBanner(
              selectedDay: selectedDay,
            ),
            SizedBox(height: 8.0),
            _ScheduleList(
              selectedDate: selectedDay,
            ),
          ],
        ),
      ),
    );
  }

  FloatingActionButton renderFloatingActionButton() {
    return FloatingActionButton(
      onPressed: () {
        showModalBottomSheet(
          context: context,
          isScrollControlled: true,
          builder: (_) {
            return ScheduleBottomSheet(
              selectedDate: selectedDay,
            );
          },
        );
      },
      backgroundColor: PRIMARY_COLOR,
      child: Icon(
        Icons.add,
      ),
    );
  }

  onDaySelected(DateTime selectedDay, DateTime focusedDay) {
    setState(() {
      this.selectedDay = selectedDay;
      this.focusedDay = selectedDay;
    });
  }
}

class _ScheduleList extends StatelessWidget {
  final DateTime selectedDate;

  const _ScheduleList({required this.selectedDate, Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Padding(
        padding: EdgeInsets.symmetric(horizontal: 8.0),
        child: StreamBuilder<List<ScheduleWithColor>>(
          stream: GetIt.I<LocalDatabase>().watchSchedules(selectedDate),
          builder: (context, snapshot) {
            if (!snapshot.hasData) {
              return Center(child: CircularProgressIndicator());
            }

            if (snapshot.hasData && snapshot.data!.isEmpty) {
              return Center(
                child: Text('스케줄이 없습니다.'),
              );
            }

            return ListView.separated(
              itemCount: snapshot.data!.length,
              separatorBuilder: (context, index) {
                return SizedBox(height: 8.0);
              },
              itemBuilder: (context, index) {
                final scheduleWithColor = snapshot.data![index];

                return Dismissible(
                  key: ObjectKey(scheduleWithColor.schedule.id),
                  direction: DismissDirection.endToStart,
                  onDismissed: (DismissDirection direction) {
                    GetIt.I<LocalDatabase>()
                        .removeSchedule(scheduleWithColor.schedule.id);
                  },
                  child: GestureDetector(
                    onTap: () {
                      showModalBottomSheet(
                        context: context,
                        isScrollControlled: true,
                        builder: (_) {
                          return ScheduleBottomSheet(
                            selectedDate: selectedDate,
                            scheduleId: scheduleWithColor.schedule.id,
                          );
                        },
                      );
                    },
                    child: ScheduleCard(
                      startTime: scheduleWithColor.schedule.startTime,
                      endTime: scheduleWithColor.schedule.endTime,
                      content: scheduleWithColor.schedule.content,
                      color: Color(
                        int.parse(
                            'FF${scheduleWithColor.categoryColor.hexCode}',
                            radix: 16),
                      ),
                    ),
                  ),
                );
              },
            );
          },
        ),
      ),
    );
  }
}
