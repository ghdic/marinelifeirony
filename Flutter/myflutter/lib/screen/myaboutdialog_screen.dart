import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

// 라이센스 명시 페이지로 이동하기 전용 위젯, 따로 커스텀 할 부분은 없어보임

class MyAboutDialogScreen extends StatelessWidget {
  const MyAboutDialogScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _MyAboutDialog(),
      ),
    );
  }
}

class _MyAboutDialog extends StatefulWidget {
  const _MyAboutDialog({Key? key}) : super(key: key);

  @override
  State<_MyAboutDialog> createState() => _MyAboutDialogState();
}

class _MyAboutDialogState extends State<_MyAboutDialog> {
  @override
  void initState() {
    super.initState();
    initMyLibrary();
  }

  void initMyLibrary() {
    LicenseRegistry.reset(); // 리셋하지 않으면 추가했던 라이브러리 관련 라이센스가 자동으로 추가 되어 있음
    LicenseRegistry.addLicense(() async* {
      yield LicenseEntryWithLineBreaks(<String>['인생마린'], '''
  Copyright 2022 marinelife.com. All rights reserved.
  
     * 인생마린 법에 따라 이 어플리케이션을 사용하면서 생긴 데이터는 인생마린의 소유가 된다 반박시 니말맞
   
  이 어플리케이션을 사용하며 생기는 법적 문제는 사용자 본인의 책임으로 한다''');
    });
    LicenseRegistry.addLicense(() => Stream<LicenseEntry>.value(
          const LicenseEntryWithLineBreaks(
            <String>['Sample'],
            '''
Copyright 2022 The Sample Authors. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

   * Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.
   * Redistributions in binary form must reproduce the above
copyright notice, this list of conditions and the following disclaimer
in the documentation and/or other materials provided with the
distribution.
   * Neither the name of Example Inc. nor the names of its
contributors may be used to endorse or promote products derived from
this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.''',
          ),
        ));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('showAboutDialog 연습'),
      ),
      body: Center(
        child: ElevatedButton(
          child: Text('Show AboutDialog'),
          onPressed: () {
            showAboutDialog(
              context: context,
              applicationIcon: FlutterLogo(),
              applicationName: '라이센스 법적 고지',
              applicationVersion: '1.2.1',
              applicationLegalese: '©2022 marinelife.com',
              children: <Widget>[
                Padding(
                    padding: EdgeInsets.only(top: 15),
                    child: Text('이 앱은 플루터 showAboutDialog로 빌드되었습니다'))
              ],
            );
          },
        ),
      ),
    );
  }
}
