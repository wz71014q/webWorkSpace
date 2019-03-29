const webpack = require('webpack');
const program = require('commander');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const path = require('path');
const baseConfig = require('./webpack.base.config');
const serverConfig = require('../server/devServer');
const merge = require('webpack-merge');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const opn = require('opn');

const app = express();

let entry;

program
  .command('project <project> [file]')
  .action((project, file) => {
    entry = path.resolve(__dirname, '../../', 'projects', project, file, 'main.js');
    const inlineConfig = merge(baseConfig, {
      entry: function setEntry() {
        return [entry, 'webpack-hot-middleware/client?reload=true']; // 入口文件
      },
      mode: 'development',
      devtool: 'source-map',
      devServer: serverConfig,
      module: {
        rules: [
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader",
                options: {
                  modules: true, // 指定使用CSS modules
                  localIdentName: '[local]' // 指定css的类名格式
                }
              },
              {
                loader: "postcss-loader",
                options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                  config: {
                    path: './'
                  }
              }
              }
            ]
          }
        ]
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`Your application is running: http://${serverConfig.host}:${serverConfig.port}\n`],
          },
        }),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname,'../../', 'projects', project, file, 'index.html')// template
        }),
      ],
    });
    const compiler = webpack(inlineConfig);

    app.use(webpackDevMiddleware(compiler, {
      logLevel: 'error',
      progress: true,
      logTime: true,
    }));
    app.use(webpackHotMiddleware(compiler, {
      noInfo: true,
      log: false,
      heartbeat: 2000,
    }));
    app.listen(3000);
    // opn('http://localhost:3000');
  });

program.parse(process.argv);
