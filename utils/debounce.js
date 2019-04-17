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

export default debounceIm;
