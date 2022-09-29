import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  // lat - 위도, long - 경도
  static final LatLng companyLatLng = LatLng(37.3497, -122.0829);
  static final CameraPosition initialPosition =
      CameraPosition(target: companyLatLng, zoom: 15);
  bool choolCheckDone = false;
  GoogleMapController? mapController;

  static const double okDistance = 100;
  static final Circle withinDistanceCircle = Circle(
      circleId: CircleId('withinDistanceCircle'),
      center: companyLatLng,
      fillColor: Colors.blue.withOpacity(0.5),
      radius: okDistance,
      strokeColor: Colors.blue,
      strokeWidth: 1);
  static final Circle notWithinDistanceCircle = Circle(
      circleId: CircleId('notWithinDistanceCircle'),
      center: companyLatLng,
      fillColor: Colors.red.withOpacity(0.5),
      radius: okDistance,
      strokeColor: Colors.red,
      strokeWidth: 1);
  static final Circle checkDoneCircle = Circle(
      circleId: CircleId('checkDoneCircle'),
      center: companyLatLng,
      fillColor: Colors.green.withOpacity(0.5),
      radius: okDistance,
      strokeColor: Colors.green,
      strokeWidth: 1);
  static final Marker marker =
      Marker(markerId: MarkerId('marker'), position: companyLatLng);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: renderAppBar(),
        body: FutureBuilder(
          future: checkPermission(),
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return Center(
                child: CircularProgressIndicator(),
              );
            }

            if (snapshot.data == '위치 권한이 허가되었습니다') {
              return StreamBuilder<Position>(
                  stream: Geolocator.getPositionStream(),
                  builder: (context, snapshot) {
                    bool isWithInRange = false;

                    if (snapshot.hasData) {
                      final start = snapshot.data!;
                      final end = companyLatLng;

                      final distance = Geolocator.distanceBetween(
                          start.latitude,
                          start.longitude,
                          end.latitude,
                          end.longitude);

                      if (distance < okDistance) {
                        isWithInRange = true;
                      }
                    }
                    return Column(
                      children: [
                        _CustomGoogleMap(
                          initialPosition: initialPosition,
                          circle: choolCheckDone
                              ? checkDoneCircle
                              : isWithInRange
                                  ? withinDistanceCircle
                                  : notWithinDistanceCircle,
                          marker: marker,
                          onMapCreated: onMapCreated,
                        ),
                        _ChoolCheckButton(
                          isWithInRange: isWithInRange,
                          choolCheckDone: choolCheckDone,
                          onPressed: onChoolCheckPressed,
                        )
                      ],
                    );
                  });
            }

            return Center(
              child: Text(snapshot.data),
            );
          },
        ));
  }

  void onMapCreated(GoogleMapController controller) {
    mapController = controller;
  }

  void onChoolCheckPressed() async {
    final result = await showDialog(
        context: context,
        builder: (BuildContext) {
          return AlertDialog(
            title: Text('출근하기'),
            content: Text('출근을 하시겠습니까?'),
            actions: [
              TextButton(
                  onPressed: () {
                    Navigator.of(context).pop(false);
                  },
                  child: Text('취소')),
              TextButton(
                  onPressed: () {
                    Navigator.of(context).pop(true);
                  },
                  child: Text('출근')),
            ],
          );
        });
    if (result) {
      setState(() {
        choolCheckDone = true;
      });
    }
  }

  AppBar renderAppBar() {
    return AppBar(
      title: Center(
        child: Text(
          '오늘도 출근',
          style: TextStyle(color: Colors.blue, fontWeight: FontWeight.w700),
        ),
      ),
      backgroundColor: Colors.white,
      actions: [
        IconButton(
            onPressed: () async {
              if (mapController == null) {
                return;
              }
              final location = await Geolocator.getCurrentPosition();
              mapController!.animateCamera(CameraUpdate.newLatLng(
                  LatLng(location.latitude, location.longitude)));
            },
            icon: Icon(
              Icons.my_location,
              color: Colors.blue,
            ))
      ],
    );
  }

  Future<String> checkPermission() async {
    final isLocationEnabled = await Geolocator.isLocationServiceEnabled();

    if (!isLocationEnabled) {
      return '위치 서비스를 활성화 해주세요.';
    }

    LocationPermission checkedPermission = await Geolocator.checkPermission();

    if (checkedPermission == LocationPermission.denied) {
      checkedPermission = await Geolocator.requestPermission();

      if (checkedPermission == LocationPermission.denied) {
        return '위치 권한을 허가해주세요.';
      }
    }

    if (checkedPermission == LocationPermission.deniedForever) {
      return '맵의 위치 권한을 세팅해서 허가해주세요';
    }

    return '위치 권한이 허가되었습니다';
  }
}

class _CustomGoogleMap extends StatelessWidget {
  final CameraPosition initialPosition;
  final Circle circle;
  final Marker marker;
  final MapCreatedCallback onMapCreated;
  const _CustomGoogleMap(
      {Key? key,
      required this.initialPosition,
      required this.circle,
      required this.marker,
      required this.onMapCreated})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Expanded(
      flex: 2,
      child: GoogleMap(
        initialCameraPosition: initialPosition,
        mapType: MapType.normal,
        myLocationEnabled: true,
        myLocationButtonEnabled: false,
        circles: Set.from(
          [circle],
        ),
        markers: Set.from([marker]),
        onMapCreated: onMapCreated,
      ),
    );
  }
}

class _ChoolCheckButton extends StatelessWidget {
  final isWithInRange;
  final VoidCallback onPressed;
  final choolCheckDone;
  const _ChoolCheckButton(
      {Key? key,
      required this.isWithInRange,
      required this.onPressed,
      required this.choolCheckDone})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Expanded(
        child: Column(
      children: [
        Icon(
          Icons.timelapse_outlined,
          size: 50.0,
          color: choolCheckDone
              ? Colors.green
              : isWithInRange
                  ? Colors.blue
                  : Colors.red,
        ),
        const SizedBox(
          height: 20.0,
        ),
        if (!choolCheckDone && isWithInRange)
          ElevatedButton(onPressed: onPressed, child: Text('출근하기'))
      ],
    ));
  }
}
