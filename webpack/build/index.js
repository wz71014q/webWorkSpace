const webpack = require('webpack');
const program = require('commander');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const baseConfig = require('../config/webpack.base.config');
const merge = require('webpack-merge');
const ora = require('ora');

const spinner = ora({
  spinner: {
    frames:['←','↑','→','↓'],
    interval: 80,
  },
  color: 'red',
  text: 'Loading...',
});

program
  .command('val <val>')
  .action((val) => {
    const entry = path.resolve(__dirname, '../../', 'projects/webpackSpace', val, 'main.js');
    const inlineConfig = merge(baseConfig, {
      entry: function setEntry() {
        return entry; // 入口文件
      },
      mode: 'production',
      plugins: [
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: ['Your application build successed\n'],
          },
        }),
        new CleanWebpackPlugin([path.resolve('./dist')])
      ],
    });
    spinner.start();
    webpack(inlineConfig, (err, stats) => {
      spinner.stop();
      if (err) {
        console.log(err);
      }
      console.log('build successed');
    });
  });

program.parse(process.argv);
