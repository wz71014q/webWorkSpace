import './index.html';
import './style.css';

let countNumer = 1;
function count() {
  const rect = document.querySelector('.rect');
  rect.innerHTML = parseInt(rect.innerHTML, 10) + countNumer;
}
function init() {
  const rect = document.querySelector('.rect');
  rect.addEventListener('mousemove', count, false);
}
init();
