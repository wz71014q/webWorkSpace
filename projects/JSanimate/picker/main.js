import './index.html';
import './style.css';

const pickerWrapper = document.createElement('div');
let startPoint = [];
let angle = 0; // 转的角度
let angleCache = 0; // 角度缓存
const riadio = 300; // 半径
let itemAngle = 0; // 元素分布角度
const touchEvent = {
  touchStart(eve) {
    let _eve = eve || window.event;
    _eve.preventDefault();
    _eve.stopPropagation();
    startPoint = [_eve.clientX || _eve.targetTouches[0].pageX, _eve.clientY || _eve.targetTouches[0].pageY];
    handleManager.addHandle(document, handleManager.moveEvent, touchEvent.touching);
    handleManager.addHandle(document, handleManager.stopEvent, touchEvent.touchEnd);
  },
  touching(eve) {
    let _eve = eve || window.event;
    _eve.preventDefault();
    _eve.stopPropagation();
    const movingPoint = [_eve.clientX || _eve.targetTouches[0].pageX, _eve.clientY || _eve.targetTouches[0].pageY];
    let verticalDistance = 0;
    verticalDistance = startPoint[1] - movingPoint[1];
    rotate(pickerWrapper, verticalDistance);
  },
  touchEnd(eve) {
    let _eve = eve || window.event;
    _eve.preventDefault();
    _eve.stopPropagation();
    const endPoint = [_eve.clientX || _eve.changedTouches[0].pageX, _eve.clientY || _eve.changedTouches[0].pageY];
    angleCache += Math.round((startPoint[1] - endPoint[1]) * 3 / (5 * Math.PI));

    let angleCount = Math.abs(parseInt(angle / itemAngle, 10));
    if (Math.abs(angle % 36) <= 18) { // 未满20%，返回原位置
      angleCache = angle / Math.abs(angle) * itemAngle * angleCount;
      rotate(pickerWrapper, '', angle / Math.abs(angle) * itemAngle * angleCount);
    } else { // 超过20%，返回+1原位置
      angleCache = angle / Math.abs(angle) * itemAngle * (angleCount + 1);
      rotate(pickerWrapper, '', angle / Math.abs(angle) * itemAngle * (angleCount + 1));
    }
    clear();
  },
};
const handleManager = {
  startEvent: 'ontouchstart' in window ? 'touchstart' : 'mousedown',
  moveEvent: 'ontouchmove' in window ? 'touchmove' : 'mousemove',
  stopEvent: 'ontouchend' in window ? 'touchend' : 'mouseup',
  // passive:true: 告诉浏览器，事件里不会调用preventDefault，则浏览器不会在滑动时暂停200ms左右检测是否调用了preventDefault
  addHandle(obj, event, handle) {
    obj.addEventListener(event, handle, { passive: false, capture: false });
  },
  removeHandle(obj, event, handle) {
    obj.removeEventListener(event, handle, false);
  }
};
function clear() {
  handleManager.removeHandle(pickerWrapper, handleManager.touchStart, touchEvent.touchStart);
  handleManager.removeHandle(document, handleManager.moveEvent, touchEvent.touching);
}
function addClass(obj, cls) {
  if (!hasClass(obj, cls)) {
    obj.className += ` ${cls}`;
  }
}
function hasClass(obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
function rotate(obj, verticalDistance, addAngle) {
  if (addAngle !== undefined) {
    angle = addAngle;
  } else {
    angle = Math.round(verticalDistance * 3 / (5 * Math.PI)) + angleCache;
  }
  obj.style.transform = `rotateX(${angle}deg)`;
}
function init(count) {
  itemAngle = 360 / count;
  document.getElementById('app').appendChild(document.createElement('div'));
  addClass(document.querySelectorAll('div')[1], 'container');
  const container = document.getElementsByClassName('container')[0];
  addClass(pickerWrapper, 'picker-wrapper');
  container.appendChild(pickerWrapper);
  for (let i = 0; i < count; i += 1) {
    pickerWrapper.appendChild(document.createElement('figure'));
    addClass(document.querySelectorAll('figure')[i], 'item');
    document.querySelectorAll('figure')[i].appendChild(document.createElement('p'));
    document.querySelectorAll('p')[i].innerHTML = i;
    addClass(document.querySelectorAll('p')[i], 'item-text');
    document.querySelectorAll('figure')[i].style.transform = `rotateX(${360 / count * i}deg) translateZ(${riadio}px)`;
  }
  handleManager.addHandle(pickerWrapper, handleManager.startEvent, touchEvent.touchStart);
}
init(10);
