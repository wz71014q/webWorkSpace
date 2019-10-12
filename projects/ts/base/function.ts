// 函数声明法
function add(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(add(4, 5));

// 函数表达式法
let fun = function(n1: number, n2: number): number {
  return n1 + n2;
};
console.log(fun(1, 2));

// 箭头函数
let gun = (n1: number, n2: number) => n1 + n2;
console.log(gun(10, 20));
