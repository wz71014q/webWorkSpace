import './index.html';
import './style.css';

const pickerWrapper = document.createElement('div');

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

let startPoint = [];
let angleYCache = 0;
let startTime = 0;
let endTime = 0;
const touchEvent = {
  touchStart(eve) {
    let _eve = eve || window.event;
    _eve.preventDefault();
    _eve.stopPropagation();
    startTime = +new Date();
    startPoint = [_eve.clientX || _eve.targetTouches[0].pageX, _eve.clientY || _eve.targetTouches[0].pageY];
    handleManager.addHandle(document, handleManager.moveEvent, touchEvent.touching);
  },
  touching(eve) {
    let _eve = eve || window.event;
    _eve.preventDefault();
    _eve.stopPropagation();
    const movingPoint = [_eve.clientX || _eve.targetTouches[0].pageX, _eve.clientY || _eve.targetTouches[0].pageY];
    let angelY = 0;
    angelY = startPoint[1] - movingPoint[1];
    rotate(pickerWrapper, angelY);
  },
  touchEnd(eve) {
    let _eve = eve || window.event;
    _eve.preventDefault();
    _eve.stopPropagation();
    const endPoint = [_eve.clientX || _eve.targetTouches[0].pageX, _eve.clientY || _eve.targetTouches[0].pageY];
    console.log('touchEnd', endPoint);
    angleYCache += startPoint[1] - endPoint[1];
    angleYCache %= 360;
    endTime = +new Date();
    clear();
  },
};
function clear() {
  handleManager.removeHandle(pickerWrapper, handleManager.touchStart, touchEvent.touchStart);
  handleManager.removeHandle(document, handleManager.moveEvent, touchEvent.touching);
}
function rotate(obj, angelY) {
  obj.style.transform = `rotateX(${angleYCache + angelY}deg)`;
}
function inertia(distance, time) {
  let acc = 0;
  let speedEnd = 0;
  acc = (2 * distance) / (time * time);
  speedEnd = (2 * distance) / time;
  console.log('acc', acc, 'speedEnd', speedEnd);
}
function addClass(obj, cls) {
  if (!hasClass(obj, cls)) {
    obj.className += ` ${cls}`;
  }
}
function hasClass(obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
function setStyle() {
  const liList = document.getElementsByTagName('figure');
  let listLength = liList.length;
  for (let i = 0; i < listLength; i += 1) {
    liList[i].style.transform = `rotateX(${360 / 10 * i}deg) translateZ(${300}px)`;
  }
}
function init() {
  const container = document.getElementsByClassName('container')[0];
  addClass(pickerWrapper, 'picker-wrapper');
  for (let i = 0; i < 10; i += 1) {
    pickerWrapper.appendChild(document.createElement('figure'));
  }
  container.appendChild(pickerWrapper);
  const liList = document.getElementsByTagName('figure');
  for (let item of liList) {
    addClass(item, 'item');
  }
  setStyle();
  handleManager.addHandle(pickerWrapper, handleManager.startEvent, touchEvent.touchStart);
  handleManager.addHandle(document, handleManager.stopEvent, touchEvent.touchEnd);
}
init();
