const webpack = require('webpack');
const program = require('commander');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const path = require('path');
const baseConfig = require('../config/webpack.base.config');
const serverConfig = require('../server/devServer');
const merge = require('webpack-merge');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const opn = require('opn');

const app = express();

let entry;

program
  .command('val <val>')
  .action((val) => {
    entry = path.resolve(__dirname, '../../', 'projects/webpackSpace', val, 'main.js');
    const inlineConfig = merge(baseConfig, {
      entry: function setEntry() {
        return entry; // 入口文件
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
    app.use(webpackDevMiddleware(webpack(inlineConfig), {
      logLevel: 'error',
      logTime: true,
    }));
    app.use(webpackHotMiddleware(webpack(inlineConfig), {
      timeout: 2000,
      log: false,
    }));
    app.listen(8081);
    opn('http://localhost:8081');
  });

program.parse(process.argv);
