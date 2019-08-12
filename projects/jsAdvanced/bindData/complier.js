// 从根节点开始，遍历所有节点，获取所有带v-model和{{}}中的属性(已在data定义或w-model这种默认指令)，为它们添加watcher。并且input更新后手动修改data
import Watcher from './watcher';

function getElement(element) {
  const _this = this;
  const nodeList = element.children; // 获取每一级的根节点: HTMLCollection
  for (let i = 0; i < nodeList.length; i += 1) {
    complier.call(_this, nodeList[i]);
  }
}
function complier(element) {
  const _this = this;
  if (element.children.length) {
    complier(element); // 递归深度遍历dom树
  }
  if (element.hasAttribute('w-model') && element.tagName === 'INPUT') {
    const attr = element.getAttribute('w-model');
    _this._watchers[attr].push(
      new Watcher({
        el: element,
        val: attr,
        vm: _this,
        attr: 'value',
      }),
    );
    element.addEventListener(
      'input',
      function() {
        _this.$data[attr] = element.value;
      },
      false,
    );
  }
  // 遍历节点，获取{{}}中的值，在Wue.data中查找对应的属性，添加watcher
  const tagReg = /^\{\{\s*(.*\S)\s*\}\}$/;
  let textNode = element.textContent; // 当前节点的文本内容
  if (tagReg.test(textNode)) {
    textNode = textNode.replace(tagReg, (matched, matchedVal) => {
      let watcher = _this._watchers[matchedVal];
      if (!watcher) {
        // 没有事件池 创建事件池
        watcher = [];
      }
      watcher.push(
        new Watcher({
          el: element,
          vm: _this,
          val: matchedVal,
          attr: 'innerHTML',
        }),
      );
    });
  }
}

export default getElement;
