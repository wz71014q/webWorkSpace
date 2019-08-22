import './index.html';

//TODO 获取文档的节点以及节点列表，节点名称，index等等
const root = document.getElementsByTagName('html')[0];
const list = document.getElementById('list');
const nodeLists = [].slice.call(document.getElementsByTagName('li'));

list.addEventListener('click', getIndex, false);
root.addEventListener('click', getName, false);

function getName(e) {
  console.log(e.target.tagName);
}
function getIndex(e) {
  console.log(nodeLists.indexOf(e.target));
}