import './index.html';
import './style.css';

let moveElement;
function initEvents() {
  const ele = document.querySelectorAll('.root')[0];
  ele.ondragstart = onDragstart;
  ele.ondragover = onDragover;
  ele.ondrop = onDrop;
}

function onDragstart(e) {
  moveElement = e.target;
}

function onDragover(e) {
  e.preventDefault();
}

function onDrop(e) {
  e.preventDefault();
  if (e.target.classList.contains('parent')) {
    moveElement.parentNode.removeChild(moveElement);
    e.target.appendChild(moveElement);
  }
}

initEvents();
