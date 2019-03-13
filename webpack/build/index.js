const webpack = require('webpack');
const program = require('commander');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const baseConfig = require('../config/webpack.base.config');
const merge = require('webpack-merge');
const ora = require('ora');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      module: {
        rules: [
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: MiniCssExtractPlugin.loader,
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
        new MiniCssExtractPlugin({
          filename: "[name].[chunkhash:8].css",
          chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname,'../../', 'projects', project, file, 'index.html'),// template
          minify: {
              removeAttributeQuotes:true
            },
            hash: true,
            filename:'index.html'
        }),
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: ['Your application build successed\n'],
          },
        }),
        new CleanWebpackPlugin('../../dist', {
          root: __dirname,
          verbose: true,
          dry: false
        })
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
