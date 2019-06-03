const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  moduleFileExtensions: [ // 处理以下文件
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: { // 解析文件路径, identity-obj-proxy是模拟输入
    '^@/(.*)$': '<rootDir>/assets/$4',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  transform: { // loader
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: [ // 忽略测试文件
    '<rootDir>/projects/',
    '<rootDir>/test/sub.test.js'
  ],
  testRegex: 'demo.test.js', // 测试单个文件
  // snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  // setupFiles: ['<rootDir>/test/unit/setup'],
  collectCoverage: true, // 测试覆盖率
  coverageDirectory: '<rootDir>/test/coverage',
  collectCoverageFrom: [ // 测试覆盖率
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ]
};
