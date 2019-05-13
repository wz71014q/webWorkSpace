const fs = require('fs');
const queryString = require('querystring');

module.exports = {
  readFile(file, res, req) {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-type': 'text/html; chartset=utf-8' });
      res.write(data);
      res.end();
    });
  },
  postReadFile(file, res, req, post) {
    let urlObject = queryString.parse(post);
    const arr = ['email', 'password'];
    let reg;
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-type': 'text/html; chartset=utf-8' });
      for (let i = 0; i < arr.length; i += 1) {
        reg = new RegExp('{' + arr[i] + '}', 'gi');
        data = data.replace(reg, urlObject[arr[i]]);
      }
      res.write(data);
      res.end();
    });
  },
  readImg(file, res) {
    fs.readFile(file, 'binary', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-type': 'image/jpg' });
      res.write(data, 'binary');
      res.end();
    });
  }
};

