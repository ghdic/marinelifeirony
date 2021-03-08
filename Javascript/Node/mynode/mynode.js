// 전역 변수
// __filename : 현재 실행 중인 코드의 파일 경로
// __dirname : 현재 실행 중인 코드 폴더 경로

const { setMaxListeners } = require('process');

// // 전역 객체
// // console : 콘솔 화면 관련 기능
// // exports : 모듈 관련 기능
// // process : 프로그램 관련된 기능
// console.time('test') // 시간 측정 시작
// console.log('output : %d %s %j', 273, 'hi', {name:'marinelife'})
// console.log('\u001b[31m', 'Hello world') // 글씨색 적용 \u001[숫자m
// console.log('\u001b[0m', 'Hello world') // 0 초기화, 1 색밝게, 30-37 글자색, 40-47 배경색
// console.timeEnd('test') // 시간 측정 종료

// // argv 입력 인자에 대해서 반복적으로 시행
// process.argv.forEach(function(item, index) { // node mynode.js --exit 5000
//     console.log(index + ' : ' + typeof(item) + ' : ', item);

//     if(item == '--exit') {
//         var exitTime = Number(process.argv[index + 1]);

//         setTimeout(function(){
//             process.exit();
//         }, exitTime)
//     }
// });

// exports.abs = function (number) { // 모듈 생성시 사용
//     if (0 < number) {
//         return number;
//     } else {
//         return -number;
//     }
// };
// // var mymodule = require('모듈 이름.js');
// // mymodule.abs(number)

// // 모듈을 추출합니다.
// var os = require('os');

// // 모듈을 사용합니다.
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.release());
// console.log(os.uptime());
// console.log(os.loadavg());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.cpus());
// console.log(os.getNetworkInterfaces());

// var url = require('url');
// var querystring = require('querystring');

// var parsedObject = url.parse('https://news.naver.com/main/read.nhn?mode=LSD&mid=shm&sid1=101&oid=437&aid=0000260742');
// console.log(parsedObject)
// console.log(querystring.parse(parsedObject.query))

// var util = require('util');

// var data = util.format('%d + %d = %d', 10, 110, 10 + 110);
// console.log(data)

// var fs = require('fs');

// var text = fs.readFileSync('textfile.txt', 'utf-8'); // 동시
// console.log(text)

// var text = fs.readFile('textfile.txt', 'utf-8', function (error, data) {
//     console.log(data);
// });

// var data = 'Hello world!';

// fs.writeFile('writefile.txt', data, 'utf-8', function (error) {
//     console.log('Write async Complete!');
// }); // async(비동기)는 명령을 내린뒤 다음 코드를 실행, sync(동기)는 작업완료까지 대기

// fs.writeFileSync('writefilesync.txt', data, 'utf-8');
// console.log('Write sync Complte!')

// // sync 예외 처리
// // 파일을 읽습니다.
// try {
//     var data = fs.readFileSync('textfile.txt', 'utf8');
//     console.log(data);
// } catch (e) {
//     console.log(e);
// }

// // 파일을 씁니다.
// try {
//     fs.writeFileSync('textfile.txt', 'Hello World .. !', 'utf8');
//     console.log('FILE WRITE COMPLETE');
// } catch (e) {
//     console.log(e);
// }

// // async 예외 처리
// // 파일을 읽습니다.
// fs.readFile('textfile.txt', 'utf8', function (error, data) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// });

// // 파일을 씁니다.
// fs.writeFile('textfile.txt', 'Hello World .. !', 'utf8', function (error) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('FILE WRITE CONPLETE');
//     }
// });

// process.on('exit', function() {
//     console.log("bye bye~");
// });

// process.on('uncaughtException', function (error) {
//     console.log("예외 발견! " + error);
// });

// var count = 0;
// var id = setInterval(function () {
//     count++;

//     if (count == 3) { clearInterval(id); }

//     error.error.error(); // 틀린 문법으로 강제 에러 발생
// }, 2000);

// 똑같은 이벤트에 10개 초과의 핸들러가 연결될 경우 경고발생
// setMaxListeners(limit) // 최대 핸들러 개수 조정 가능

// var onUncaughtException = function (error) {
//     console.log('예외 발생 !!' + error);

//     process.removeListener('uncaughtException', onUncaughtException);
// };

// // 이벤트 연결
// process.on('uncaughtException', onUncaughtException);

// setInterval(function () {
//     error.error.error();
// }, 2000)

// process.on('exit', function () {
//     console.log('bye bye~ ');
// });

// process.emit('exit'); // 강제로 이벤트 발생
// process.emit('exit');
// process.emit('exit');
// process.emit('exit');
// console.log('프로그램 실행중');
// process.exit(); // 강제 종료

var custom = new process.EventEmitter();

custom.on('tick', function () {
  console.log('이벤트 실행');
});

custom.emit('tick'); // 이벤트 발생

exports.timer = new process.EventEmitter();

setInterval(function () {
  exports.timer.emit('tick');
}, 1000);

exports.timer.on('tick', function () {
  console.log('tick 실행...');
});