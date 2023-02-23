import './index.html';
import './style.css';

const rect = document.querySelector('.rect');
/**
 * @function count
 * @description 原始方法，未加节流
 */
function count() {
  rect.innerHTML = parseInt(rect.innerHTML, 10) + 1;
  // console.log(this);
  // console.log(e);
}
/**
 * @function throttle
 * @description 节流方法,使用时间戳实现，第一次会触发，最后离开触发范围不会触发
 * @param {any} fn
 * @param {any} fn
 * @param {any} wait
 * @returns
 */
function throttleTime(fn, wait) {
  let preTime = 0;
  return function (...args) {
    const context = this;
    const nowTime = +new Date();
    if (nowTime - preTime > wait) {
      fn.apply(context, args);
      preTime = nowTime;
    }
  };
}
/**
 * @function throttleTimer
 * @description 节流方法，使用定时器实现。第一次不触发，最后离开触发范围也会触发
 * @param {any} fn
 * @param {any} wait
 * @returns
 */
function throttleTimer(fn, wait) {
  let waitTimer = 0;
  return function (...args) {
    const context = this;
    if (!waitTimer) {
      waitTimer = setTimeout(() => {
        fn.apply(context, args);
        clearTimeout(waitTimer);
        waitTimer = null;
      }, wait);
    }
  };
}

/**
 * @function merge
 * @description 节流方法，以上两种方法的合体
 * @param {any} fn
 * @param {Number} wait
 * @param {Object} options 设置第一次是否触发，以及离开范围后是否触发
 * @returns
 */
function merge(fn, wait, options) {
  let preTime = 0;
  let waitTimer = 0;
  const throttle = function (...args) {
    const context = this;
    const nowTime = +new Date();
    if (nowTime - preTime > wait && options.leading) {
      fn.apply(context, args);
      preTime = nowTime;
      clearTimeout(waitTimer);
      waitTimer = null;
    } else if (!waitTimer && options.traling) {
      waitTimer = setTimeout(() => {
        fn.apply(context, args);
        clearTimeout(waitTimer);
        waitTimer = null;
      }, wait);
    }
  };
  throttle.cancel = function () {
    clearTimeout(waitTimer);
    waitTimer = null;
    preTime = 0;
  };
  return throttle;
}
function init() {
  rect.addEventListener('mousemove', merge(count, 1000, { leading: true, traling: true }), false);
}
init();
