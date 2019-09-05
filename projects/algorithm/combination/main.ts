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
function arrayCombination(array: number[], targetLength: number): number[][] {
  const len: number = array.length;
  const result: number[][] = new Array(combination(len, targetLength));
  for (let i = 0; i < len; i ++) {
    result[i] = [array[i]];
  }
  console.log('结果有: ', combination(len, targetLength), '种', result);
  return result;
}
arrayCombination([3, 4, 5, 1, 2], 3);
