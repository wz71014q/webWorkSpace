import './index.html';
import './style.css';

function init() {
  const wrapper = document.querySelector('.wrapper');
  const content = document.querySelector('.content');
  console.log('wrapper的offsetHeight: ' + wrapper.offsetHeight + ': ' + typeof wrapper.offsetHeight);
  console.log('wrapper的offsetWidth: ' + wrapper.offsetWidth + ': ' + typeof wrapper.offsetWidth);
  console.log('wrapper的offsetTop: ' + wrapper.offsetTop + ': ' + typeof wrapper.offsetTop);
  console.log('wrapper的offsetLeft: ' + wrapper.offsetLeft + ': ' + typeof wrapper.offsetLeft);
  console.log('wrapper的clientWidth: ' + wrapper.clientWidth + ': ' + typeof wrapper.clientWidth);
  console.log('wrapper的clientHeight: ' + wrapper.clientHeight + ': ' + typeof wrapper.clientHeight);
  console.log('wrapper的scrollHeight: ' + wrapper.scrollHeight + ': ' + typeof wrapper.scrollHeight);
  console.log('wrapper的scrollWidth: ' + wrapper.scrollWidth + ': ' + typeof wrapper.scrollWidth);
  console.log('wrapper的scrollTop: ' + wrapper.scrollTop + ': ' + typeof wrapper.scrollTop);
  console.log('wrapper的scrollLeft: ' + wrapper.scrollLeft + ': ' + typeof wrapper.scrollLeft);

  console.log('\n\ncontent的offsetHeight: ' + content.offsetHeight + ': ' + typeof content.offsetHeight);
  console.log('content的offsetWidth: ' + content.offsetWidth + ': ' + typeof content.offsetWidth);
  console.log('content的offsetTop: ' + content.offsetTop + ': ' + typeof content.offsetTop);
  console.log('content的offsetLeft: ' + content.offsetLeft + ': ' + typeof content.offsetLeft);
  console.log('content的clientWidth: ' + content.clientWidth + ': ' + typeof content.clientWidth);
  console.log('content的clientHeight: ' + content.clientHeight + ': ' + typeof content.clientHeight);

  content.scrollTop = content.clientHeight;
  console.log('content的scrollHeight: ' + content.scrollHeight + ': ' + typeof content.scrollHeight);
  console.log('content的scrollWidth: ' + content.scrollWidth + ': ' + typeof content.scrollWidth);
  console.log('content的scrollTop: ' + content.scrollTop + ': ' + typeof content.scrollTop);
  console.log('content的scrollLeft: ' + content.scrollLeft + ': ' + typeof content.scrollLeft);
}

init();

/**
 * @description 获取浏览器缩放比例
 */
function detectZoom (){
  let ratio = 0;
  let screen = window.screen; // 用户屏幕信息
  let ua = navigator.userAgent.toLowerCase(); // 浏览器信息，IE11以下包含msieXX
  if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio;
    // 判断IE11以下，ua是否包含msie，等同于if (-1*ua.indexOf('msie') <= 0)
  } else if (~ua.indexOf('msie')) {
    if (screen.deviceXDPI && screen.logicalXDPI) {
      // ratio = 物理像素 / 逻辑像素;
      ratio = screen.deviceXDPI / screen.logicalXDPI;
    }
  } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    ratio = window.outerWidth / window.innerWidth;
  }

   if (ratio) {
    ratio = Math.round(ratio * 100);
  }
   return ratio;
};
let result = detectZoom()
console.log(result);