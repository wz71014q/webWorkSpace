import './index.html';

function Thread() {
  let nowTime = 0; //线程已经执行了多久
  let maxTime = 15; //线程最多执行多久
  const threadArr = []; //数组模拟线程队列

  this.addThread = function(fn) { // 线程队列
    threadArr.push(fn);
  };
  this.start = function() { // 开始线程
    doingThread();
  };
  const doingThread = function() {
    if (threadArr.length > 0) {
      if (nowTime < maxTime) {
        let now = new Date().getTime();
        const method = threadArr.shift();
        method();
        let nowNew = new Date().getTime() - now;
        nowTime += nowNew;
        doingThread();
      } else {
        nowTime = 0;
        setTimeout(doingThread, 1); //每执行完线程后睡1ms
      }
    } else { // 线程空闲中，等待线程队列
      setTimeout(doingThread, 100);
    }
  };
};

function fn(num) {
  console.log(num);
}
const thread = new Thread();
thread.start(); // 线程开始

for (let i = 0; i < 10; i += 1) {
  thread.addThread(function() {
    fn(i);
  });
}
