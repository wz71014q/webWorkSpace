const program = require('commander');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const path = require('path');
const baseConfig = require('../config/webpack.base.config');
const serverConfig = require('../server/devServer');
let merge = require('webpack-merge');

let project;

program
  .command('val <val>')
  .action((val) => {
    console.log(val);
    project = val;
  });
const entry = path.join(__dirname, '/projects/webpackSpace/', project, 'main.js');
console.log(entry);
module.exports = merge(baseConfig, {
  entry: {
    main: entry, // 入口文件
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
program.parse(process.argv);
