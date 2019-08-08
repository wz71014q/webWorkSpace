function getElement(element) {
  console.log(this);
  const nodeList = element.children; // 获取每一级的根节点: HTMLCollection
  for (let i = 0; i < nodeList.length; i += 1) {
    complier(nodeList[i]);
  }
}
function complier(el) {
  console.log(this);
  const textNode = el.textContent;
  const tagReg = /^\{\{\s*(.*)\s*\}\}$/;
  if (el.hasAttribute('w-model') && el.tagName === 'INPUT') {
    const attr = el.getAttribute('w-model');
    el.addEventListener('input', function (e) {
      console.log('input已更新，请注意查收', e.target.value);
    }, false);
  }
  textNode.replace(tagReg, (matched, matchedVal) => {
    console.log(matched, matchedVal);
  })
}

function addWatcher() {
  new Watcher(el, this, attr, 'value');
}
export default getElement;