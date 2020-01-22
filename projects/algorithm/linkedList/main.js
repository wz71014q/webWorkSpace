import './index.html';

// JS 单向链表

// 节点
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 链表引用类型
function List() {
  this.head = new ListNode(); // 哨兵节点
  this.size = 0;
}
List.prototype = {
  // 添加节点
  add: function addNode(newNode) {
    let current = this.head;
    while(current.next !== null) {
      current = current.next
    }
    current.next = new ListNode(newNode);
    this.size += 1;
  },
  // 查找节点在链表中的index
  findNodeIndex: function findNodeIndex(data) {
    let current = this.head.next;
    let result = 0;
    while(current.next !== null) {
      current = current.next;
      result ++;
      if (data === current.val) {
        break;
      }
    }
    return result;
  }
}
const myList = new List();
myList.add(1);
myList.add(2);
myList.add(5);
myList.add(4);
myList.add(3);
console.log(myList, myList.findNodeIndex(5));