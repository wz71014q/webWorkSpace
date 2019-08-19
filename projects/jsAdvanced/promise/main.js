import './index.html';

const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(executor) {
  const self = this;
  self.status = PENDING;
  self.value = undefined;
  self.reason = undefined;

  function resolve(value) {
    if (self.status === PENDING) {
      self.value = value;
      self.status = RESOLVED;
    }
  }

  function reject(reason) {
    if (self.status === PENDING) {
      self.reason = reason;
      self.status = REJECTED;
    }
  }
  executor(resolve, reject);
}

MyPromise.prototype.then = function (onFulfilled) {
  const self = this;
  if (self.status = RESOLVED) {
    onFulfilled(self.value);
  }
}
MyPromise.prototype.catch = function (onRejected) {
  const self = this;
  if (self.status = REJECTED) {
    onRejected(self.reason);
  }
}

let p = new MyPromise(function (resolve, reject) {
  console.log('start')
  resolve('data2')
})
p.then((v) => {
  console.log('success ' + v)
})
p.catch((v) => {
  console.log('error ' + v)
})
console.log('end');