// import './index.html';

const http = require('http');
const url = require('url');
const router = require('./modules/router');

http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
  if (req.url !== 'favicon.ico') {
    const pathName = url.parse(req.url).pathname.replace(/\//, '');
    console.log(pathName);
    try {
      router[pathName](req, res);
    } catch (error) {
      router.home(req, res);
    }
  }
  // res.end();
}).listen(8000);
console.log('your application is running http://localhost:8000');
