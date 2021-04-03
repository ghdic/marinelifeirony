// var http = require('http');
// var fs = require('fs');
// var ejs = require('ejs');

// http
//   .createServer(function (request, response) {
//     fs.readFile('EJSPage.ejs', 'utf-8', function (error, data) {
//       response.writeHead(200, { 'Content-Type': 'text/html' });
//       response.end(ejs.render(data, {
//         name: 'MarineLife',
//         description: 'Life is cool..!'
//       }));
//     });
//   })
//   .listen(52273, function () {
//     console.log('Server Running 127.0.0.1:52273');
//   });

// // <% CODE %> 코드 입력, <%= Value %> 출력, <%# %> 주석