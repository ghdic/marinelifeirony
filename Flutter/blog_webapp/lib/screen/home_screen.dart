import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class HomeScreen extends StatelessWidget {
  HomeScreen({Key? key}) : super(key: key);
  WebViewController? controller;
  final homeUrl = 'https://www.daum.net/';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.orange,
          title: Text('Marine Life'),
          centerTitle: true,
          actions: [
            IconButton(
                onPressed: () {
                  if (controller == null) return;
                  controller!.loadUrl(this.homeUrl);
                },
                icon: Icon(Icons.home))
          ],
        ),
        body: WebView(
          onWebViewCreated: (WebViewController controller) {
            this.controller = controller;
          },
          initialUrl: this.homeUrl,
          javascriptMode: JavascriptMode.unrestricted,
        ));
  }
}
