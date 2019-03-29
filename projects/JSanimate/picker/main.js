import './index.html';
import './style.css';

const container = document.getElementsByClassName('container')[0];
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
const touchEvent = {
  touchStart() {
    console.log('touchStart');
    handleManager.addHandle(container, handleManager.moveEvent, touchEvent.touching);
  },
  touching() {
    console.log('touching');
  },
  touchEnd() {
    console.log('touchEnd');
    handleManager.removeHandle(container, handleManager.moveEvent, touchEvent.touching);
  }
};
handleManager.addHandle(container, handleManager.startEvent, touchEvent.touchStart);
handleManager.addHandle(container, handleManager.stopEvent, touchEvent.touchEnd);
