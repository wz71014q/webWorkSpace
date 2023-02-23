import './index.html';
import './style.css';

const root = document.querySelector('#root');
// 获取当前选区
const selection = getSelection();
// 创建新的范围
const r1 = document.createRange();
const r2 = document.createRange();
const r3 = document.createRange();

r1.setStart(root.firstChild, 0);
r1.setEnd(root.firstChild, 20);

r2.setStart(root.firstChild, 30);
r2.setEnd(root.firstChild, 40);

r3.setStart(root.firstChild, 60);
r3.setEnd(root.firstChild, 70);

// 将范围添加进选区，但是只有firefox支持多个选区，chrome上看不到效果
selection.addRange(r1);
selection.addRange(r2);
selection.addRange(r3);
console.log('selection', selection);
