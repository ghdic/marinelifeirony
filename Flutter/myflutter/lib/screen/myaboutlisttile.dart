import 'package:flutter/material.dart';

// 라이센스 명시 이동에서 Draw안에 ListTile로 들어갈때 사용하는 용도
class MyAboutListTile extends StatefulWidget {
  const MyAboutListTile({Key? key}) : super(key: key);

  @override
  State<MyAboutListTile> createState() => _MyAboutListTileState();
}

class _MyAboutListTileState extends State<MyAboutListTile> {
  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);
    final TextStyle textStyle = theme.textTheme.bodyText2!;
    final List<Widget> aboutBoxChildren = <Widget>[
      const SizedBox(height: 24),
      RichText(
        text: TextSpan(
          children: <TextSpan>[
            TextSpan(
                style: textStyle,
                text: "Flutter is Google's UI toolkit for building beautiful, "
                    'natively compiled applications for mobile, web, and desktop '
                    'from a single codebase. Learn more about Flutter at '),
            TextSpan(
                style: textStyle.copyWith(color: theme.colorScheme.primary),
                text: 'https://flutter.dev'),
            TextSpan(style: textStyle, text: '.'),
          ],
        ),
      ),
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('AboutListTile 연습'),
      ),
      drawer: Drawer(
        child: SingleChildScrollView(
          child: SafeArea(
            child: Column(
              children: [
                AboutListTile(
                  icon: const Icon(Icons.info),
                  applicationIcon: const FlutterLogo(),
                  applicationName: 'Show About Example',
                  applicationVersion: 'August 2019',
                  applicationLegalese: '\u{a9} 2014 The Flutter Authors',
                  aboutBoxChildren: aboutBoxChildren,
                ),
                ListTile(
                  isThreeLine: true,
                  leading: Icon(Icons.warning),
                  trailing: Icon(Icons.help),
                  title: Text('hello'),
                  subtitle: Text('world'),
                )
              ],
            ),
          ),
        ),
      ),
      body: Center(child: Text('AboutListTile')),
    );
  }
}
