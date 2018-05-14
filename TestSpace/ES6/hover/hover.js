function init() {
  document.querySelector('.btn').onmousemove = (e) => {
    let x = e.pageX - e.currentTarget.offsetLeft;
    let y = e.pageY - e.currentTarget.offsetTop;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };
}
window.onload = function () {
  init();
};
