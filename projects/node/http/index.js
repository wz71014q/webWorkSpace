const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'www.aaa.com';

const port = 3000;

const server = http.createServer((req, res) => {
  var reqUrl = req.url;
  console.log('reqUrl', reqUrl);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if (reqUrl.indexOf('abc' > -1)) {
    res.setHeader('Set-Cookie', 'token=tokensss; msg=hello; path=/; httpOnly;')
  }
  fs.readFile(path.resolve(__dirname, '../../basic/iframe/child.html'), (err, data) => {
    if (err) throw err;
    console.log(data.toString);
    res.end(data);
  });
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
