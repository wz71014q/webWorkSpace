module.exports = {
  mode: 'production',
  entry:  "./main.js", // 入口文件
  output: {
    path: "./dist",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: "./build",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  modules: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "env",
              "react"
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}