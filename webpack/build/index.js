const webpack = require('webpack');
const program = require('commander');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
  .command('project <project> [file]')
  .action((project, file) => {
    const entry = path.resolve(__dirname, '../../', 'projects', project, file, 'main.js');
    const inlineConfig = merge(baseConfig, {
      entry: function setEntry() {
        return entry; // 入口文件
      },
      mode: 'production',
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname,'../../', 'projects', project, file, 'index.html')// template
        }),
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
