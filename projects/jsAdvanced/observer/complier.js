import Watcher from './watcher';
import Emitter from './emitter';

function getElement(element) {
  const _this = this;
  const nodeList = element.children; // 获取每一级的根节点: HTMLCollection
  for (let i = 0; i < nodeList.length; i += 1) {
    complier.call(_this, nodeList[i]);
  }
}
function complier(element) {
  const _this = this;
  const textNode = element.textContent; // 当前节点的文本内容
  const tagReg = /^\{\{\s*(.*)\s*\}\}$/;
  if (element.hasAttribute('w-model') && element.tagName === 'INPUT') {
    const attr = element.getAttribute('w-model');
    element.addEventListener(
      'input',
      (function() {
        _this._watchers[attr].push(
          new Watcher({
            el: element,
            val: element.value,
            vm: _this,
            attr: attr,
          }),
        );
        return function() {
          _this.$data[attr] = element.value;
          console.log('this', _this.$data);
          console.log('input已更新，请注意查收', element.value);
        };
      })(),
      false,
    );
    textNode.replace(tagReg, (matched, matchedVal) => {
      console.log(matched, matchedVal);
    });
  }
}

export default getElement;
