/** *******************字符的unicode表示法**************** */
let unisym = '\u{20BB7}';
console.log(unisym);
let comSting = 'Across this street and then the 1 Avenue will in front of you';
console.log(comSting.includes('is', 15));// includes检测字符是否在字符串comString中，第二个参数是从什么位置开始检测直到结束
console.log(comSting.repeat(3));// 重复3次
console.log(`this is 1st line 1
this is 2ed line 2`);
/** ************************************** */
const strSet = [1, 2, 2, 3, 3, 6, 7, 7];
const setRe = new Set();
strSet.forEach(x => setRe.add(x));
for (let j of setRe) {
  console.log(j);
}
console.log(Number.parseInt('13', 10)); // ES6中parseInt变成Number.parseInt
console.log(`Math.pow = ${Math.pow(2, 4)}，n次方运算：2 ** = ${2 ** 4}`);

/* **********************字符串遍历循环*******************start*********** */
for (let str of 'string') {
  console.log(`字符串遍历循环: ${str}`);
}
/* **********************字符串遍历循环*******************end*********** */

/* **********************字符串长度补全(ES2017)*******************start*********** */
const y = 'x'.padSart(5, 'nmn');
console.log(`字符串长度补全: ${y}`);
/* **********************字符串长度补全*******************end*********** */
