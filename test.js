const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const opn = require('opn');

const complier = webpack(config);
const server = new WebpackDevServer(complier, {});

server.listen(8081, 'localhost', () => {
  console.log('listen at http:localhost:8081');
});
opn('http://localhost:8081');
