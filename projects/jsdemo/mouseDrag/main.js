import './index.html';
import './style.css';

function initEvents() {
  const ele = document.querySelectorAll('.root')[0];
  ele.onmousedown = onMouseDown;
}

function copyEle (e) {
  const target = e.target;
  const copyEle = target.cloneNode(true);
  copyEle.style.position = 'absolute';
  copyEle.style.left = target.offsetLeft + 'px';
  copyEle.style.top = target.offsetTop + 'px';
  copyEle.style.opacity = 0.5;
  return {
    origin: e.target,
    copy: copyEle
  };
}

function onMouseDown(e) {
  e.stopPropagation();
  e.preventDefault();
  if (!e.target.classList.contains('child')) {
    return;
  }
  const { origin, copy } = copyEle(e);
  const disX = e.clientX - e.target.offsetLeft;
  const disY = e.clientY - e.target.offsetTop;
  document.onmousemove = function (e) {
    onMove(e, { x: disX, y: disY }, copy);
  };
  document.onmouseup = function (e) {
    onMoveEnd(e, { x: disX, y: disY }, origin, copy);
  };
  document.body.appendChild(copy);
}

function onMove(e, offset, target) {
  target.style.left = e.clientX - offset.x + 'px';
  target.style.top = e.clientY - offset.y + 'px';
}

function onMoveEnd(e, offset, origin, copy) {
  origin.style.position = 'absolute';
  origin.style.left = e.clientX - offset.x + 'px';
  origin.style.top = e.clientY - offset.y + 'px';
  document.body.removeChild(copy);
  document.onmousemove = null;
  document.onmouseup = null;
}

initEvents();
