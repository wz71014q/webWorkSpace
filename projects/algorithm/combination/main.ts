import './index.html';

// 阶乘
function factorial(n: number): number {
  let result = 1;
  while (n > 0) {
    result = result * n --;
  }
  return result;
}
// console.log(factorial(3));

// 排列
function permutation(n: number, m: number): number {
  let result = 1;
  const max = n -  m + 1;
  while (n >= max) {
    result = result * n --;
  }
  return result;
}
// console.log(permutation(5, 3));

// 组合
function combination(n: number, m: number): number {
  const result = permutation(n, m) / factorial(m);
  return result;
}
// console.log(combination(5, 3));

// 将数组元素进行组合并输出结果
function groupSplit(array: number[], targetLength: number): number[][] {
  const len: number = array.length;
  const result: number[][] = [];
  function range(input: number[], output: number[]) {
    if (output.length === targetLength) {
      result.push(output);
    } else {
      for (let i = 0, originalLength = input.length; i < originalLength; i ++) {
        range(input.slice(i + 1), output.concat(input[i]));
      }
    }
  }
  range(array, []);
  console.log('结果有: ', combination(len, targetLength), '种', result);
  return result;
}
groupSplit([1, 2, 3, 4, 5], 3);
