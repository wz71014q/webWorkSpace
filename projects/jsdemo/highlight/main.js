import './index.html';
import './style.scss';

const editor = document.querySelector('.input-container');
const wrapper = document.querySelector('.wrapper');

initSize();

function initSize() {
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const elementWidth = entry.contentRect.width;
      const elementHeight = entry.contentRect.height;
      editor.style.width = `${elementWidth - 16}px`;
      editor.style.height = `${elementHeight - 16}px`;
    }
  });
  resizeObserver.observe(wrapper);
  editor.focus();
}

// 记录上一次内容长度
let contentsLength = 0;
// 记录光标最后位置
let cursorPosition = 0;
editor.onclick = function () {
  setCursorPosition();
};

editor.onkeyup = function () {
  setCursorPosition();
};
editor.addEventListener('input', (e) => {
  const contents = e.target.innerText;
  const highlightStrings = ['width', 'height'];
  const highlightReg = new RegExp(highlightStrings.join('|'), 'g');
  const highlightContents = contents.match(highlightReg);
  const normalContents = contents.split(highlightReg);
  const highlightNodes = highlightContents
    ? highlightContents.map((v, idx) => highlightContent(v, idx))
    : '';
  let str = '';
  for (let i = 0; i < normalContents.length; i++) {
    const error = i > 0 ? highlightNodes[i - 1] : '';
    str = str + error + normalContents[i];
  }
  editor.innerHTML = str;
  resetCursor();
});

function highlightContent(content, idx) {
  return `<span class="error">${content}</span>`;
}

function setCursorPosition() {
  const editRange = getSelection().getRangeAt(0);
  const clickNode = editRange.commonAncestorContainer;
  const clonedRange = editRange.cloneRange();
  clonedRange.selectNodeContents(editor);
  clonedRange.setStart(editor, editor.length);
  contentsLength = clonedRange.toString().length;
  clonedRange.setEnd(clickNode, editRange.endOffset);
  cursorPosition = clonedRange.toString().length;
  clonedRange.detach();
}

function resetCursor() {
  const selection = getSelection();
  const editRange = selection.getRangeAt(0);
  const clonedRange = editRange.cloneRange();
  clonedRange.selectNodeContents(editor);
  clonedRange.setStart(editor, editor.length);
  const newContentsLength = clonedRange.toString().length;
  clonedRange.detach();
  cursorPosition = cursorPosition + (newContentsLength - contentsLength);
  contentsLength = newContentsLength;

  const nodes = editor.childNodes;
  let offset = 0;
  for (let i = 0; i < nodes.length; i++) {
    const curNode = nodes[i];
    const curNodeLength = curNode.nodeType === 3 ? curNode.length : curNode.firstChild.length;
    if (offset + curNodeLength >= cursorPosition) {
      const range = document.createRange();
      const rangeNode = curNode.nodeType === 3 ? curNode : curNode.childNodes[0];
      range.setStart(rangeNode, cursorPosition - offset);
      selection.removeAllRanges();
      range.collapse(false);
      selection.addRange(range);
      break;
    } else {
      offset += curNodeLength;
    }
  }
}
