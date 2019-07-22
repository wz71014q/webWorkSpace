(function () {
  let docEl = document.documentElement; // 根元素html
  // 判断窗口有没有orientationchange(横竖屏切换)这个方法，有就赋值给一个变量，没有就返回resize方法。
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  let recalc = function () {
    let clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 16 * (clientWidth / 360) + 'px';
    actualResizeHandler();
  };
    // 系统调整字体后，webview页面会受影响，检查放大了多少倍，将根元素大小同步缩小相同倍数
  function actualResizeHandler() {
    let fontsize = /^\d+/.exec(document.documentElement.style.fontSize);
    let cmtFont = /^\d+/.exec(window.getComputedStyle(document.getElementsByTagName('html')[0]).fontSize);
    let radio = Number(fontsize) / Number(cmtFont);
    if (radio !== 1) {
      document.documentElement.style.fontSize = Number(fontsize) * radio + 'px';
      console.log('resize=============================================>');
      console.log('radio:' + radio + ' fixed' + Number(fontsize) * radio);
    }
    console.log('fontsize:' + fontsize + ' cmtFont: ' + cmtFont);
    console.log('resize<=====================================');
  }
  if (!document.addEventListener) return;
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener('DOMContentLoaded', recalc, false);
}());
