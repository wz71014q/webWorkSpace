import './index.html';
import './style.css';

let finalLeft;
let finalHeight;

function drag() {
  let center = document.querySelector('.replace');
  center.onmousedown = client; // 获取中间盒子，按下鼠标时添加事件
}

function client(eve) {
  let _eve = eve || window.event; // 兼容性
  let out = document.querySelector('.replace');
  let disX = _eve.clientX - out.offsetLeft; // 鼠标点击位置跟out块的左边框距离
  let disY = _eve.clientY - out.offsetTop; // 鼠标点击位置跟out块的上边框距离
  document.onmousemove = function (event) {
    let _event = event || window.event;
    mov(_event, disX, disY);
  };
  document.onmouseup = function () {
    stop();
    document.onmousemove = null;
    document.onmouseup = null; // 释放鼠标时清空事件
  };
}

function mov(eve, posx, posy) {
  let _eve = eve || window.event;
  let out = document.querySelector('.replace');
  finalLeft = _eve.clientX - posx; // out盒子左边框距离左窗口的距离
  finalHeight = _eve.clientY - posy; // out盒子上边框距离上窗口的距离
  let diffWidth = document.documentElement.clientWidth - out.offsetWidth || document.body.clientWidth - out.offsetWidth; // 兼容性获取当前窗口的宽度-out盒子的宽度
  let diffHeight = document.documentElement.clientHeight - out.offsetHeight || document.body.clientWidth - out.offsetWidth; // 兼容性获取当前窗口的高度-out盒子的高度
  if (finalLeft <= 0) {
    finalLeft = 0;
  }
  if (finalHeight <= 0) {
    finalHeight = 0;
  }
  if (finalLeft >= diffWidth) {
    finalLeft = diffWidth;
  }
  if (finalHeight >= diffHeight) {
    finalHeight = diffHeight;
  } // 设置坐标，使盒子不超出窗口
  out.style.left = finalLeft + 'px';
  out.style.top = finalHeight + 'px';
}
function stop() {
  document.querySelector('.dialog').style.left = finalLeft + 'px';
  document.querySelector('.dialog').style.top = finalHeight + 'px';
}
window.onload = drag;
