const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express');

const app = express();
const config = require('./webpack.config');

app.use(webpackDevMiddleware(webpack(config), {}));
app.listen(3000, () => console.log('Demo listening in 3000\n'));
