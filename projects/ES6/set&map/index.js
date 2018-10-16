const s = new Set(); // Set数据结构，内部的值是唯一的，没有重复的值。
[2, 3, 4, 5, 2, 4, 3].forEach(x => s.add(x));
console.log(s); // 可用于去除数组重复元素
for (let i of s) {
  console.log(i);
}

/* *********Set 可添加数组等作为一个参数*******start******** */
const a = new Set([2, 4, 5, 1, 9, 2, 1, 4, 5]);
console.log(a);
console.log(`a.size = ${a.size}`);
/* *********Set 可添加数组等作为一个参数********end********* */

/* *********Set 实例的属性和方法*******start******** */
const setInstance = new Set([2, 4, 5, 1, 9, 2, 1, 4, 5]);
setInstance.add(6);
setInstance.delete(9);
console.log(`检测是否含有某个成员： ${setInstance.has(5)}`);
console.log(setInstance);
const array = Array.from(setInstance);
console.log(`Array.from可以将Set结构转化为数组：${array}`);
/* *********Set 实例的属性和方法********end********* */

/* *********Set 遍历方法*******start******** */
let sset = new Set(['red', 'blue', 'green']);
for (let item of sset.keys()) { // 获取键名, set没有键名，所以结果与values一样
  console.log(`获取键名: ${item}`);
}
for (let item of sset.values()) { // 获取值
  console.log(`获取值: ${item}`);
}
for (let item of sset.entries()) { // 获取键值对
  console.log(`获取键值对: ${item}`);
}
/* *********Set 遍历法********end********* */

/* *********Set 数组去重********start********* */
let repeatedArr = [3, 8, 1, 6, 1, 2, 3, 8];
let unique = [...new Set(repeatedArr)];
console.log(unique);
/* *********Set 数组去重********end********* */
