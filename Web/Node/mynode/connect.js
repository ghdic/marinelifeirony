// var connect = require('connect'); // 미들웨어로 로그, 에러, get/post 볼수 있음, static, router, cookie 역할 다 ok

// connect(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/html'});
//   response.end('<h1>Hello Connect Module</h1>');
// }).listen(52273, function () {
//   console.log('Server 127.0.0.1:52273');
// })



// 로그인 구현
var connect = require('connect');
var fs = require('fs');

var id = 'ghdic';
var pw = '1234';


var server = connect();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = require('router');

server.use(cookieParser());
server.use(bodyParser());
server.use(router(function (app) {
  app.get('/Login', function (request, response) {
    if (request.cookie.auth == 'true') {
      response.writeHead(200, { 'Content-Type' : 'text/html'});
      response.end('<h1>Login Success</h1>');
    } else {
      fs.readFileSync('Login.html', function (error, dat) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
      });
    }
  });
  
  app.post('/Login', function (request, response) {
    if (request.body.id == id && request.body.password == pw) {
      response.writeHead(302, {
        'Location': '/Login',
        'Set-Cookie': ['auth = true']
      });
      response.end();
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end('<h1>Login Fail</h1>')
    }
  })
}));


server.listen(52273, function () {
    console.log('Server 127.0.0.1:52273');
  })