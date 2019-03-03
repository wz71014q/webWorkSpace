const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const opn = require('opn');

const app = express();
const config = require('./webpack.config.test');

app.use(webpackDevMiddleware(webpack(config), {
  logLevel: 'error',
  heartbeat: 2000,
  progress: true,
  inline: true,
  hot: true
}));
app.use(webpackHotMiddleware(webpack(config)));
app.listen(8081);
opn('http://localhost:8081');
