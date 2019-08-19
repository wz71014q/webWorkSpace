import './index.html';

// 手写call
Function.prototype.myCall = function(context, ...props) {
  if (context === null || context === undefined) {
    context = window;
  } else {
    context = Object(context);
  }
  const callFn = Symbol('');
  context[callFn] = this;
  let result = context[callFn](...props);
  delete context[callFn];
  return result;
};

const str = 'agldsbgakgbwr';
console.log(String.prototype.split.myCall(str, ''));

Function.prototype.myApply = function(context, args) {
  // 如果未传入context，指定为window
  if (context === null || context === undefined) {
    context = window;
  } else {
    context = Object(context);
  }
  // 给context新增一个唯一的fn方法
  const applyFn = Symbol('');
  // 将调用的方法赋值给新的applyFn
  context[applyFn] = this;
  // 执行方法并返回
  let result = context[applyFn](...args);
  delete context[applyFn];
  return result;
}
console.log(String.prototype.slice.myApply(str, [2, 5]));

Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new Error('called must be function!');
  }
  const fn = this;
  // myBind内部的参数
  const args = [...arguments].slice(1);
  return function() {
    // function内部的参数，保存两个参数，保证可以正常调用或者柯里化调用
    let newArg = [...arguments]
    return fn.apply(context, args.concat(newArg));
  }
}
console.log(String.prototype.slice.myBind(str, 2, 5)());