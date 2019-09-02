// 数组排列
function permutation(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result[i].push(arr[i]);
  }
  return result;
}
// console.log(permutation([1, 2, 3, 4]));