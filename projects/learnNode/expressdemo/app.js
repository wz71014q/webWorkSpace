let createError = require('http-errors');
let express = require('express');
let favicon = require('serve-favicon');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

// view engine setup, 两个路由中间件
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // 设置渲染引擎

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json()); // 处理浏览器传来的json数据
app.use(express.urlencoded({ extended: false })); // 处理浏览器表单的内容
app.use(cookieParser()); // 对浏览器cookie的操作
app.use(express.static(path.join(__dirname, 'public'))); // 设置浏览器访问的根目录

// 注册路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
