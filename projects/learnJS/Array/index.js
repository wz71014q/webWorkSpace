const colorArr = ['red', 'blue', 'green'];
colorArr.length -= 1; // 数组的length属性是可以改写的，这样就可以删除数组后面的元素,或者添加新元素
console.log(colorArr);
colorArr[colorArr.length] = 'yellow';
console.log(colorArr);

console.log(Array.isArray(colorArr)); // 检测是否是数组

const numberArr = [0, 1, 5, 15, 6, 9, 10, 20];
console.log(numberArr.sort()); // sort方法先对数组项应用toString方法，然后按照unicode码进行字符比较排序

// 添加比较函数来使sort方法可以输出正确值
function compare(num1, num2) {
  let result = 0;
  if (num1 > num2) {
    result = 1;
  } else if (num1 < num2) {
    result = -1;
  }
  return result;
}
// 或者用一个简单的比较函数：
function compareSimple(num1, num2) {
  return num1 - num2;
}
console.log(numberArr.sort(compare));
console.log(numberArr.sort(compareSimple));

// 数组迭代方法
// every()
// filter()
// forEach()
// map()
// some()
const numbers = [1, 2, 3, 4, 5];
const mapResult = numbers.map(item => item * 2);
console.log(mapResult);

// 数组归并方法: reduce()/reduceRight()
const sum = numbers.reduce((pre, cur) => pre + cur);
console.log(sum);
