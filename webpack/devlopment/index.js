const webpack = require('webpack');
const program = require('commander');
// const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const path = require('path');
const baseConfig = require('../config/webpack.base.config');
const serverConfig = require('../server/devServer');
let merge = require('webpack-merge');
const WebpackDevServer = require('webpack-dev-server');
// const express = require('express');
// const opn = require('opn');

// const app = express();

let entry;

program
  .command('val <val>')
  .action((val) => {
    entry = path.join(__dirname, '/projects/webpackSpace', val, '/main.js');
    console.log(entry);
  });
// const entry = __dirname + '/projects/webpackSpace/' + project + '/main.js';
// const entry = path.join(__dirname, '/projects/webpackSpace', project, '/main.js');
// console.log(entry);
const inlineConfig = merge(baseConfig, {
  entry: {
    entry, // 入口文件
  },
  devServer: serverConfig,
  // plugins: [
  //   new FriendlyErrorsPlugin({
  //     compilationSuccessInfo: {
  //       messages: [`Your application is running: http://${serverConfig.host}:${serverConfig.port}\n`],
  //     },
  //   })
  // ],
});
const server = new WebpackDevServer(webpack(inlineConfig), {});
server.listen(8081, 'localhost', () => {
  console.log('listen at http://localhost:8081');
});
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
// app.listen(3000, () => console.log('Demo listening in 3000'));
// opn(`http://${serverConfig.host}:${serverConfig.port}`);

program.parse(process.argv);
