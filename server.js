const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express');
const opn = require('opn');

const app = express();
const config = require('./webpack.one.config');

app.use(webpackDevMiddleware(webpack(config), {
  logLevel: 'error',
  heartbeat: 2000,
}));
app.listen(3000);
opn('http://localhost:3000');
