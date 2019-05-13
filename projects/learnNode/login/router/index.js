const file = require('../file');
const url = require('url');
// const queryString = require('querystring');

module.exports = {
  home(req, res) {
    // res.write('主页');
    file.readFile('./views/home.html', res, req);
  },
  login(req, res) {
    // let urlObject = url.parse(req.url, true).query;
    // console.log(urlObject.email);
    // console.log(urlObject.password);
    let post = '';
    req.on('data', (chunk) => {
      post += chunk;
    });
    req.on('end', () => {
      file.postReadFile('./views/login.html', res, req, post);
    });
    // file.readFile('./views/login.html', res, req);
  },
  registor(req, res) {
    res.write('注册页面');
  },
  img(req, res) {
    file.readImg('./img/spider.jpg', res);
  }
};

