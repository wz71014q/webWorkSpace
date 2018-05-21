/** **********************函数值的默认参数******************************** */
function defaultIndex(x, y = 'world') {
  console.log(x + y);
}
defaultIndex('hello, ');
/** **********************函数值的默认参数******************************** */
function throwIfMissing() {
  throw new Error('Missing parameter');
}
function missTest(myParameter = throwIfMissing()) {
  return myParameter;
}
console.log(missTest(5));// 当没有设置参数时，抛出错误
const isEven = n => n % 2 === 0;// 箭头函数
console.log(isEven(4));
/** ************************************************************ */
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
} // 尾递归，节省内存
console.log('10! = ' + factorial(10));
/** ****************************************************************** */
function currying(fn, n) {
  return function (m) {
    return fn.call(this, m, n);
  };
}

function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}

const factorial1 = currying(tailFactorial, 1);

console.log(factorial1(5));
/** ******************************************************************* */
