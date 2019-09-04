// 数组排列
function permutation (arr: number[]) {
  const result: number[][] = [];
  for (let i = 0; i < arr.length; i += 1) {
    result[i].push(arr[i]);
  }
  return result;
}
var test;
console.log(permutation([1, 2, 3, 4]));