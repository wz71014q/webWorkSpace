import './index.html';
import './style.css';

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
class CubeObject {
  constructor() {
    this.itemContent = document.getElementsByClassName('container')[0];
    this.itemWidth = this.itemContent.width;
  }
}
const container = new CubeObject();
console.log(container.itemWidth);
const touchEvent = {
  touchStart(eve) {
    let _eve = eve || window.event;
    console.log('touchStart', _eve.clientX);
    handleManager.addHandle(container.itemContent, handleManager.moveEvent, touchEvent.touching);
  },
  touching(eve) {
    let _eve = eve || window.event;
    console.log('touching', _eve.clientX);
  },
  touchEnd(eve) {
    let _eve = eve || window.event;
    console.log('touchEnd', _eve.clientX);
    handleManager.removeHandle(container.itemContent, handleManager.moveEvent, touchEvent.touching);
  }
};
handleManager.addHandle(container.itemContent, handleManager.startEvent, touchEvent.touchStart);
handleManager.addHandle(container.itemContent, handleManager.stopEvent, touchEvent.touchEnd);
