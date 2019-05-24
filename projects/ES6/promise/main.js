import './index.html';

// 基本用法
function timeout(time) {
  console.log(time + 'ms后');
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time, 'done');
  });
}
timeout(3000)
  .then((val) => {
    console.log('执行成功', val);
  })
  .catch(() => {
    console.log('执行失败');
  });

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('fail'));
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(p1);
  }, 1000);
});
p2
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });
