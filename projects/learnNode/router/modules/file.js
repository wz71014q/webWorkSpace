const fs = require('fs');

module.exports = {
  readFile(file, res, req) {
  },
  readImg(file, res) {
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-type': 'image/jpg' });
      res.write(data, 'binary');
      res.end();
    });
  }
};

