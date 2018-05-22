function setCss3(obj, objAttr) {
  /* eslint-disable */
  // 循环属性对象
  for (var i in objAttr) {
    var newi = i;
    // 判断是否存在transform-origin这样格式的属性
    if (newi.indexOf("-") > 0) {
      var num = newi.indexOf("-");
      newi = newi.replace(newi.substr(num, 2), newi.substr(num + 1, 1).toUpperCase());
    }
    // 考虑到css3的兼容性问题,所以这些属性都必须加前缀才行
    obj.style[newi] = objAttr[i];
    newi = newi.replace(newi.charAt(0), newi.charAt(0).toUpperCase());
    obj.style[newi] = objAttr[i];
    obj.style["webkit" + newi] = objAttr[i];
    obj.style["moz" + newi] = objAttr[i];
    obj.style["o" + newi] = objAttr[i];
    obj.style["ms" + newi] = objAttr[i];
  }
}
function init() {
  let left = document.getElementsByClassName('left')[0];
  let right = document.getElementsByClassName('right')[0];
  let progress = document.getElementsByClassName('progress')[0];
  let value = 0;
  let timer = setInterval(function () {
    if (progress.innerHTML < 100) {
      progress.innerHTML = value ++
      if (value <= 50) {
        setCss3(right, { transform: 'rotate(' + value * 3.6 + 'deg)' });
      } else if (value <= 100) {
        setCss3(left, { transform: 'rotate(' + ( value - 50 ) * 3.6 + 'deg)' });
      }      
    } else {
      clearInterval(timer)
    }
  }, 100)
}
/* eslint-ensable */
window.onload = function () {
  init();
};
