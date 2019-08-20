import './index.html';

const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(executor) {
  if (typeof executor !== 'function') {
    throw new Error('MyPromise must accept a function as a parameter');
  }
  const self = this;
  self.status = PENDING;
  self.value = undefined; // 执行成功后的值
  self.reason = undefined; // 执行失败后的原因
  self.data = undefined;
  self.onResolveCallback = [];
  self.onRejectCallback = [];

  function resolve(value) {
    if (self.status === PENDING) {
      setTimeout(() => {
        self.value = value;
        self.status = RESOLVED;
        console.count('resolve');
        self.onResolveCallback.forEach(fn => {
          fn(self.value);
        });
      });
    }
  }

  function reject(reason) {
    if (self.status === PENDING) {
      setTimeout(() => {
        self.reason = reason;
        self.status = REJECTED;
        self.onRejectCallback.forEach(fn => {
          fn(self.reason);
        });
      });
    }
  }
  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

// 为了下文方便，我们顺便实现一个catch方法
MyPromise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected)
}

MyPromise.prototype.then = function(onResolved, onRejected) {
  const self = this;
  // 如果onResolved不是function，我们需要忽略它
  onResolved = typeof onResolved === 'function' ? onResolved : val => { return val;};
  onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

  let promise2;

  if (self.status === RESOLVED) {
    promise2 = new MyPromise((resolve, reject) => {
      try {
        // 检查执行结果，如果还是个Promise，则最终状态由最内部的Promise决定
        let x = onResolved(self.value);
        if (x instanceof MyPromise) {
          x.then(resolve, reject);
        }
        // 否则直接返回值作为promise2的结果
        resolve(x);
      } catch (e) {
        reject(e);
      }
    });
  }
  if (self.status === REJECTED) {
    promise2 = new MyPromise((resolve, reject) => {
      try {
        // 检查执行结果，如果还是个Promise，则最终状态由最内部的Promise决定
        let x = onRejected(self.reason);
        if (x instanceof MyPromise) {
          x.then(resolve, reject);
        }
      } catch (e) {
        reject(e);
      }
    });
  }
  if (self.status === PENDING) {
    promise2 = new MyPromise((resolve, reject) => {
      self.onResolveCallback.push(() => {
        try {
          // 检查执行结果，如果还是个Promise，则最终状态由最内部的Promise决定
          let x = onResolved(self.value);
          if (x instanceof MyPromise) {
            x.then(resolve, reject);
          }
        } catch (e) {
          reject(e);
        }
      });
      self.onRejectCallback.push(() => {
        try {
          // 检查执行结果，如果还是个Promise，则最终状态由最内部的Promise决定
          let x = onRejected(self.reason);
          if (x instanceof MyPromise) {
            x.then(resolve, reject);
          }
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  console.log(promise2);
  return promise2;
};

MyPromise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected);
};

let p = new MyPromise(function(resolve, reject) {
  console.log('start');
  setTimeout(() => {
    resolve('data');
  }, 2000);
});
p.then(res => {
  console.log('success ' + res);
})
  .then(res => {
    console.log('res', res);
  })
  // .catch(e => {
  //   console.log(e);
  // });
console.log('end');

// https://github.com/xieranmaya/blog/issues/3
