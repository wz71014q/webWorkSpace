/* *****************************Symbol创建一个独一无二的变量或对象************start*********** */
const Obj = {};
let a = Symbol('a');
let b = Symbol('b');
let s = Symbol('s');
Obj[a] = 'hello';
Obj[b] = 'world';
console.log(typeof s);
const objSymbols = Object.getOwnPropertySymbols(Obj);
console.log(objSymbols);
console.dir(Obj);
/* *****************************Symbol创建一个独一无二的变量或对象************end*********** */
let arr = ['c', 'd'];
arr[Symbol.isConcatSpreadable] = false; // 数组的Symbol.isConcatSpreadable属性设为false时不展开
let newArr = ['a', 'b'].concat(arr, 'e');
console.log(newArr);
