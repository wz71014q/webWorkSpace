const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin") 
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, '../../'),
  output: {
    publicPath: './',
    path: path.resolve(__dirname, '../../dist'), // 打包后的文件存放的地方
    filename: '[name].[hash:8].js'// 打包后输出文件的文件名
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve('src')
    }
  },
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /(\.html|\.xml)$/,
        use: {
          loader: 'raw-loader',
        },
        exclude: /node_modules/
      },
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
    new OptimizeCSSAssetsPlugin({}),
  ],
};