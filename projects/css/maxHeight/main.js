import './index.html';
import './style.css';


function genContent() {
  const text = '猕猴桃学名：Actinidia chinensis Planch），也称奇异果（奇异果是猕猴桃的一个人工选育品种，因使用广泛而成为了猕猴桃的代称）。果形一般为椭圆状，早期外观呈绿褐色';
  const ul = document.createElement('ul');
  ul.className = 'ul-wrapper';
  const li = document.createElement('li');
  li.innerHTML = text;
  for (let i = 0; i < 20; i ++) {
    ul.appendChild(li.cloneNode(true));
  }
  return ul
}
function init() {
  const clickBtn = document.querySelector('.btn');
  const mask = document.querySelector('.mask');
  const son = document.querySelector('.son');
  clickBtn.addEventListener('click', function(){
    mask.style.display = 'block';
  })
  mask.addEventListener('click', function(){
    mask.style.display = 'none';
  })
  son.insertAdjacentElement('afterbegin', genContent());
}
init();