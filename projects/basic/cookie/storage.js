// 用js操作localStorage的API：
// 添加： 只能添加key-value这种键值对，如果要存储其他类型的，需要转化成字符串
localStorage.setItem('key', 'value');

// 查找：
localStorage.key(n);  // 获取存储中第n个键名，没有就返回null

localStorage,getItem('age');

// 清除：

localStorage.removeItrm('age');  // 移出对应键值的值

localStorage.clear();  // 全部清除