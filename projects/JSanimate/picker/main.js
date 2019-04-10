import './index.html';
import './style.css';

const pickerWrapper = document.createElement('div');
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
    console.log('startTime: ', startTime);
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
    angleYCache += startPoint[1] - endPoint[1];
    angleYCache %= 360;
    endTime = +new Date();
    console.log('endTime: ', endTime, 'timeDifference', (endTime - startTime) / 1000, 'distance: ', Math.abs(startPoint[1] - endPoint[1]));
    inertia(Math.abs(startPoint[1] - endPoint[1]), (endTime - startTime));
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
function rotate(obj, angelY) {
  obj.style.transform = `rotateX(${(angleYCache + angelY) * 3 / (5 * Math.PI)}deg)`;
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
function inertia(distance, time) {
  let timeToZero = 0;
  let setAcc = 0.1;
  let oldAcc = (2 * distance) / (time * time);
  let speedStart = 0;
  let distanceEnd = 0;
  speedStart = (2 * distance) / time;
  distanceEnd = speedStart * speedStart / 2 / setAcc;
  timeToZero = speedStart / setAcc / 10;
  timeToZero = Math.ceil(timeToZero);
  angleYCache += distanceEnd;
  angleYCache %= 360;
  console.log('oldAcc', oldAcc, 'distanceEnd', distanceEnd, 'speedStart', speedStart, 'timeToZero', timeToZero);
  rotate(pickerWrapper, distanceEnd);
}
// let timer = 0;
// function timedCount(count) {
//   timer = setTimeout(timedCount(), 1000);
//   count -= 1;
//   if (count <= 0) {
//     clearTimeout(timer);
//   }
// }
init();
