let express = require('express');
const path = require('path');

let router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource'); // 无法重复send
});
router.get('/list', (req, res) => {
  res.send('this is list');
});
router.get('/ab*cd', (req, res) => {
  res.send('this is regexq');
});
router.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
// router.all可以同时接收get和post方法
router.all('/save', (req, res) => {
  res.send('表单提交');
});
module.exports = router;
