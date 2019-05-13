const fs = require('fs');

module.exports = {
  readFile(file, res, req) {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-type': 'text/html; chartset=utf-8' });
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

