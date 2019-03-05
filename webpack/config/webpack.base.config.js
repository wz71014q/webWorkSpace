const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../../'),
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'), // 打包后的文件存放的地方
    filename: 'bundle.js'// 打包后输出文件的文件名
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve('src')
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react'
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /(\.css)/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true, // 指定使用CSS modules
              localIdentName: '[name]' // 指定css的类名格式
            },
          },
        ]
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, '../../index.html')// template
    // }),
    // new webpack.HotModuleReplacementPlugin(), // 热加载插件
  ],
};
