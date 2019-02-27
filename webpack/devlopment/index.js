const webpack = require('webpack');
const program = require('commander');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const path = require('path');
const baseConfig = require('../config/webpack.base.config');
const serverConfig = require('../server/devServer');
let merge = require('webpack-merge');
const WebpackDevServer = require('webpack-dev-server');

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
  plugins: [
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running: http://${serverConfig.host}:${serverConfig.port}\n`],
      },
    })
  ],
});
const server = new WebpackDevServer(webpack(inlineConfig), serverConfig);
server.listen(8081);
program.parse(process.argv);
