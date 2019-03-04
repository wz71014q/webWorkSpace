const webpack = require('webpack');
const program = require('commander');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const path = require('path');
const baseConfig = require('../config/webpack.base.config');
const serverConfig = require('../server/devServer');
const merge = require('webpack-merge');

let entry;

program
  .command('val <val>')
  .action((val) => {
    entry = path.resolve(__dirname, '../../', 'projects/webpackSpace', val, 'main.js');
    const inlineConfig = merge(baseConfig, {
      entry: function setEntry() {
        return entry; // 入口文件
        // return entry; // 入口文件
      },
      mode: 'production',
      devServer: serverConfig,
      plugins: [
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: ['Your application build successed\n'],
          },
        })
      ],
    });
    webpack(inlineConfig);
  });

program.parse(process.argv);
