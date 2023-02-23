const webpack = require('webpack');
const program = require('commander');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const path = require('path');
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const net = require('net');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ip = require('ip').address();

let port = 3300;

const app = express();

let entry;

function checkPort() {
  return new Promise((resolve, reject) => {
    (function addport() {
      const server = net.Server();
      server.listen(port, () => {
        server.close();
        resolve(port);
      });
      server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          port++;
          addport.call();
        } else {
          reject(new Error(err));
        }
      });
    })();
  });
}

program
  .command('project <project> [file]')
  .action((project, file) => {
    entry = path.resolve(__dirname, '../../', 'projects', project, file, 'main.js');
    const inlineConfig = merge(baseConfig, {
      entry: function setEntry() {
        return [entry, 'webpack-hot-middleware/client?reload=true&noInfo=true']; // 入口文件
      },
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              'vue-style-loader',
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: true, // 指定使用CSS modules
                  localIdentName: '[local]',
                  sourceMap: true,
                  importLoaders: 2,
                }
              },
              {
                loader: "postcss-loader",
                options: {
                  config: {
                    path: './'
                  }
                }
              },
              "sass-loader"
            ]
          }
        ]
      },
      plugins: [
        new StylelintPlugin({
          fix: true,
          emitError: false,
          emitWarning: true
        }),
        new webpack.HotModuleReplacementPlugin({
          log: false
        }),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname,'../../', 'projects', project, file, 'index.html')// template
        }),
        new ProgressBarPlugin({
          format: chalk.green('Building: ') + '[:bar]' + chalk.green(' :percent ') + chalk.yellow('(:elapsed seconds)'),
          width: 30,
          complete: chalk.green.bold('■'),
          incomplete: '-'
        })
      ],
    });
    checkPort()
      .then((currentPort) => {
        const friendlyErrorsPlugin = {
          plugins: [
            new FriendlyErrorsPlugin({
              compilationSuccessInfo: {
                messages: ['\nYour application is running at: \n- ' + chalk.green(`http://localhost:${currentPort}\n`) + '- '+ chalk.green(`http://${ip}:${currentPort}\n`)]
              },
              onErrors: function (severity, errors) {
                console.log(errors)
              },
              clearConsole: true,
            }),
          ]
        }
        const compiler = webpack(merge(inlineConfig, friendlyErrorsPlugin));
        const instance = webpackDevMiddleware(compiler, {
          logLevel: 'error',
          progress: true,
          logTime: true,
        });
        app.use(instance);
        app.use(webpackHotMiddleware(compiler, {
          noInfo: true,
          log: false,
          heartbeat: 2000,
        }));
        app.listen(currentPort);
      })
      .catch((err) => {
        console.error(err);
      });
  });

program.parse(process.argv);
