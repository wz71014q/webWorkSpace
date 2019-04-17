import './index.html';
import './style.css';

const rect = document.querySelector('.rect');
/**
 * @function count
 * @description 原始方法，未加防抖
 */
function count() {
  rect.innerHTML = parseInt(rect.innerHTML, 10) + 1;
  // console.log(this);
  // console.log(e);
}
/**
 * @function dobounce
 * @description 防抖方法
 */
function dobounce(fn, wait) {
  let waitTime = 0;
  return () => {
    console.log(this);
    clearTimeout(waitTime);
    waitTime = setTimeout(() => {
      fn();
      console.log(this);
    }, wait);
  };
}
/**
 * @function
 * @description 防抖方法，dobounce可以执行，但是将count方法内部的this和event丢失了
 * @param {any} fn
 * @param {any} wait
 * @returns
 */
function debounce(fn, wait) {
  let waitTime = 0;
  return function (...args) {
    const context = this;
    clearTimeout(waitTime);
    waitTime = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}
/**
 * @function debounceIm
 * @description 防抖方法
 * @param {any} fn 执行方法
 * @param {any} wait 等待时间
 * @param {any} immediate 如果为true，则第一次执行，然后停止wait秒后再次执行
 * @returns debounced
 */
function debounceIm(fn, wait, immediate) {
  let waitTime = 0;
  let result = 0;
  const debounced = function (...args) {
    const context = this;
    if (waitTime) {
      clearTimeout(waitTime);
    }
    if (immediate) {
      let callnow = !waitTime;
      waitTime = setTimeout(() => {
        waitTime = null;
      }, wait);
      if (callnow) {
        result = fn.apply(context, args);
      }
    } else {
      waitTime = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    }
    return result;
  };
  debounced.cancel = function () {
    clearTimeout(waitTime);
    waitTime = null;
  };
  return debounced;
}
function init() {
  rect.addEventListener('mousemove', debounceIm(count, 1000, true), false);
}
init();
