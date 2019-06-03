const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  // moduleFileExtensions: [ // 处理以下文件
  //   'js',
  //   'json',
  //   'vue'
  // ],
  // moduleNameMapper: { // 解析@
  //   '^@/(.*)$': '<rootDir>/assets/$1'
  // },
  // transform: { // loader
  //   '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  //   '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  // },
  testPathIgnorePatterns: [
    '<rootDir>/projects/',
    '<rootDir>/test/sub.test.js'
  ],
  // snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  // setupFiles: ['<rootDir>/test/unit/setup'],
  // mapCoverage: true,
  // coverageDirectory: '<rootDir>/test/unit/coverage',
  // collectCoverageFrom: [ // 测试覆盖率
  //   'src/**/*.{js,vue}',
  //   '!src/main.js',
  //   '!src/router/index.js',
  //   '!**/node_modules/**'
  // ]
};
