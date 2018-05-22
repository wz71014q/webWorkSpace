function init() {
  let left = document.getElementsByClassName('left')[0];
  let right = document.getElementsByClassName('right')[0];
  let progress = document.getElementsByClassName('progress')[0];
  let value = 0;
  let timer = setInterval(() => {
    if (progress.innerHTML.split('%')[0] < 100) {
      progress.innerHTML = value++ + '%';
      if (value <= 50) {
        right.style.transform = 'rotate(' + (value * 3.6) + 'deg)';
      } else if (value <= 100) {
        left.style.transform = 'rotate(' + ((value - 50) * 3.6) + 'deg)';
      }
    } else {
      progress.innerHTML = '加载完成！';
      clearInterval(timer);
    }
  }, 100);
}
window.onload = function () {
  init();
};
