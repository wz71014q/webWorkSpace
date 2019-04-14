const pxtorem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    require('autoprefixer'),
    pxtorem({
      rootValue: 10,
      unitPrecision: 3,
      propList: ['*', '!border*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    })
  ]
};
