import './index.html';
import './style.css';

function init() {
  const wrapper = document.querySelector('.wrapper');
  const content = document.querySelector('.content');
  console.log('wrapper的offsetHeight: ' + wrapper.offsetHeight + ': ' + typeof wrapper.offsetHeight);
  console.log('wrapper的offsetWidth: ' + wrapper.offsetWidth + ': ' + typeof wrapper.offsetWidth);
  console.log('wrapper的offsetTop: ' + wrapper.offsetTop + ': ' + typeof wrapper.offsetTop);
  console.log('wrapper的offsetLeft: ' + wrapper.offsetLeft + ': ' + typeof wrapper.offsetLeft);
  console.log('\n\ncontent的offsetHeight: ' + content.offsetHeight + ': ' + typeof content.offsetHeight);
  console.log('content的offsetWidth: ' + content.offsetWidth + ': ' + typeof content.offsetWidth);
  console.log('content的offsetTop: ' + content.offsetTop + ': ' + typeof content.offsetTop);
  console.log('content的offsetLeft: ' + content.offsetLeft + ': ' + typeof content.offsetLeft);
}

init();

