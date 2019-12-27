// 排列
function factorial(sup, sub) {
  let result = 1;
  for (let i = sub; i >= sub - sup + 1; i--) {
    result *= i;
  }
  return result;
}
// 组合
function permutation (sup, sub) {
  const result = factorial(sup, sub) / factorial(sup, sup)
  return result;
}
console.log('result', permutation (3, 5))