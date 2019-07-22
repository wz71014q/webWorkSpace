const async = require('async');

// 串行无关联: 总的执行时间等于两个事件的和，但是两个事件之间执行没有关联
console.time('Serial');
async.series(
  {
    one(callback) {
      setTimeout(() => {
        callback(null, 'one');
      }, 2000);
    },
    two(callback) {
      setTimeout(() => {
        callback(null, 'two');
      }, 5000);
    }
  },
  (err, results) => {
    console.log(results);
    console.timeEnd('Serial');
  }
);

// 并行无关联: 总的执行时间互不影响，事件也没有关联
console.time('parallel');
async.parallel(
  {
    one(callback) {
      setTimeout(() => {
        callback(null, '1');
      }, 2000);
    },
    two(callback) {
      setTimeout(() => {
        callback(null, '2');
      }, 5000);
    }
  },
  (err, results) => {
    console.log(results);
    console.timeEnd('parallel');
  }
);

// 串行有关联，第一次执行的结果作为第二次的参数
console.time('waterfall');
async.waterfall([
  function (callback) {
    setTimeout(() => {
      callback(null, 'first-arg', 'second-arg');
    }, 2000);
  },
  function (arg1, arg2, callback) {
    setTimeout(() => {
      console.log('args = ', arg1, arg2);
      callback(null, arg1, arg2, 'third-arg');
    }, 5000);
  },
  function (arg1, arg2, arg3, callback) {
    callback(null, arg1, arg2, arg3, 'done');
  }
], (err, ...results) => {
  console.log(results);
  console.timeEnd('waterfall');
});

