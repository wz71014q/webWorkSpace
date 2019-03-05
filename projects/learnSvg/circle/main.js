import '../../../assets/styles/index.css';
import './style.css';

const app = document.getElementById('app');
const svgNode = document.createElement('svg');
function setAttr(ele, attr) {
  for (let i = 0; i < attr.length; i += 1) {
    ele.setAttribute(attr[i][0], attr[i][1]);
  }
}
setAttr(app, [['width', '300px'], ['height', '300px']]);
setAttr(svgNode, [['width', '300px'], ['height', '300px'], ['class', 'svgNode']]);
app.appendChild(svgNode);
app.innerHTML = 'hello';
