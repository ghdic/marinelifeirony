// var fs = require('fs');
// var http = require('http');

// var server = http
//   .createServer(function (request, response) {
//     fs.readFile('index.html', function (error, data) {
//       response.writeHead(200, { 'Content-Type': 'text/html' });
//       response.end(data);
//     });
//   })
//   .listen(52273, function () {
//     console.log('Server running');
//   });

// server.on('request', function () {
//   console.log('Request On');
// });

// server.on('connection', function () {
//   console.log('Connection On');
// });

// server.on('close', function () {
//   console.log('Close On');
// });

// http.createServer(function (request, response) {
//   fs.readFile('image.jpg', function (error, data) {
//     response.writeHead(200, { 'Content-Type': 'image/jpeg' });
//     response.end(data);
//   })
// }).listen(52274, function(){
//   console.log('Server Running 52274');
// });

// http.createServer(function (request, response) {
//   fs.readFile('music.mp3', function (error, data) {
//     response.writeHead(200, { 'Content-Type': 'audio/mp3' });
//     response.end(data);
//   })
// }).listen(52275, function(){
//   console.log('Server Running 52275');
// });

// // 쿠키 저장 및 출력
// var http = require('http');

// // 서버를 생성하고 실행합니다.
// http.createServer(function (request, response) {
//     // 변수를 선언합니다.
//     var date = new Date();
//     date.setDate(date.getDate() + 7);

//     // 쿠키를 입력합니다.
//     response.writeHead(200, {
//         'Content-Type': 'text/html ',
//         'Set-Cookie': [
//             'breakfast = toast;Expires = ' + date.toUTCString(),
//             'dinner = chicken'
//         ]
//     });

//     // 쿠키를 출력합니다.
//     response.end('<h1>' + request.headers.cookie + '</h1>');
// }).listen(52273, function () {
//     console.log('Server Running at http://127.0.0.1:52273');
// });



// // 페이지 강제 이동
// var http = require('http');

// http
//   .createServer(function (request, response) {
//     response.writeHead(302, { Location: 'https://www.naver.com' });
//     response.end();
//   })
//   .listen(52273, function () {
//     console.log('Server Running at 127.0.0.1;52273');
//   });



// // url 생성
// // 모듈을 추출합니다.
// var http = require('http');
// var fs = require('fs');
// var url = require('url');

// // 서버를 생성 및 실행합니다.
// http.createServer(function (request, response) {
//     // 변수를 선언합니다.
//     var pathname = url.parse(request.url).pathname;

//     // 페이지를 구분합니다.
//     if (pathname == '/') {
//         // Index.html 파일을 읽습니다.
//         fs.readFile('index.html', function (error, data) {
//             // 응답합니다.
//             response.writeHead(200, { 'Content-Type': 'text/html' });
//             response.end(data);
//         });
//     } else if (pathname == '/other') {
//         // OtherPage.html 파일을 읽습니다.
//         fs.readFile('other.html', function (error, data) {
//             // 응답합니다.
//             response.writeHead(200, { 'Content-Type': 'text/html' });
//             response.end(data);
//         });
//     }
// }).listen(52273, function () {
//     console.log('Server Running at http://127.0.0.1:52273');
// });



// // request get & post
// var http = require('http');
// var fs = require('fs');

// // 모듈을 사용합니다.
// http.createServer(function (request, response) {
//     if (request.method == 'GET') {
//         // GET 요청
//         fs.readFile('HTMLPage.html', function (error, data) {
//             response.writeHead(200, { 'Content-Type': 'text/html' });
//             response.end(data);
//         });
//     } else if (request.method == 'POST') {
//         // POST 요청
//         request.on('data', function (data) {
//             response.writeHead(200, { 'Content-Type': 'text/html' });
//             response.end('<h1>' + data + '</h1>');
//         });
//     }
// }).listen(52273, function () {
//     console.log('Server Running at http://127.0.0.1:52273');
// });
