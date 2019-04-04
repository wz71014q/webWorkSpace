import './index.html';
import './style.css';

class CubeObject {
  constructor() {
    this.itemContent = document.getElementsByClassName('container')[0];
    this.itemWidth = window.getComputedStyle(this.itemContent).width;
  }
}
const handleManager = {
  startEvent: 'ontouchstart' in window ? 'touchstart' : 'mousedown',
  moveEvent: 'ontouchstart' in window ? 'touchmove' : 'mousemove',
  stopEvent: 'ontouchstart' in window ? 'touchend' : 'mouseup',
  addHandle(obj, event, handle) {
    obj.addEventListener(event, handle);
  },
  removeHandle(obj, event, handle) {
    obj.removeEventListener(event, handle);
  }
};

const container = new CubeObject();
let startPoint = [];
let angleYCache = 0;
let startTime = 0;
let endTime = 0;
const touchEvent = {
  touchStart(eve) {
    let _eve = eve || window.event;
    startTime = +new Date();
    startPoint = [_eve.clientX, _eve.clientY];
    console.log('touchStart', _eve.clientX);
    console.log('startPoint', startPoint);
    handleManager.addHandle(container.itemContent, handleManager.moveEvent, touchEvent.touching);
  },
  touching(eve) {
    let _eve = eve || window.event;
    const movingPoint = [_eve.clientX, _eve.clientY];
    let angelY = 0;
    angelY = startPoint[1] - movingPoint[1];
    rotate(container.itemContent, angelY);
  },
  touchEnd(eve) {
    let _eve = eve || window.event;
    const endPoint = [_eve.clientX, _eve.clientY];
    console.log('touchEnd', [_eve.clientX, _eve.clientY]);
    angleYCache += startPoint[1] - endPoint[1];
    angleYCache %= 360;
    endTime = +new Date();
    console.log('angleYCache', angleYCache, 'time', endTime - startTime);
    // inertia(endPoint[1] - startPoint[1], (endTime - startTime) / 1000);
    handleManager.removeHandle(container.itemContent, handleManager.moveEvent, touchEvent.touching);
  }
};
handleManager.addHandle(container.itemContent, handleManager.startEvent, touchEvent.touchStart);
handleManager.addHandle(container.itemContent, handleManager.stopEvent, touchEvent.touchEnd);

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

function init() {
  const container = document.getElementsByClassName('container')[0];
  const ul = document.createElement('ul');
  for (let i = 0; i < 10; i += 1) {
    ul.appendChild(document.createElement('li'));
  }
  container.appendChild(ul);
  const liList = document.getElementsByTagName('li');
  liList.forEach((element) => {
    const _ele = element;
    addClass(_ele, 'item');
  });
}
function addClass(obj, cls) {
  if (!hasClass(obj, cls)) {
    obj.className += ` ${cls}`;
  }
}
function hasClass(obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
init();
