import './index.html';
import './style.css';

function init() {
  const wrapper = document.querySelector('.wrapper');
  const content = document.querySelector('.content');
  console.log('wrapper的offsetHeight: ' + wrapper.offsetHeight + ': ' + typeof wrapper.offsetHeight);
  console.log('wrapper的offsetWidth: ' + wrapper.offsetWidth + ': ' + typeof wrapper.offsetWidth);
  console.log('wrapper的offsetTop: ' + wrapper.offsetTop + ': ' + typeof wrapper.offsetTop);
  console.log('content的offsetHeight: ' + content.offsetHeight + ': ' + typeof wrapper.offsetHeight);
  console.log('content的offsetWidth: ' + content.offsetWidth + ': ' + typeof wrapper.offsetWidth);
  console.log('content的offsetTop: ' + content.offsetTop + ': ' + typeof wrapper.offsetTop);
}

init();

