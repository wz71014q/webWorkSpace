let obj = {
  name: 'alice',
  age: 18,
  height: 30
}

let arr1: number[];
let arr2: Array<boolean>;
let arr3: Array<string>;

let arr4: number[] = [1, 2, 3, 4, 5];

let arr5: Array<boolean> = [true, false, true];

let arr6: Array<string> = ['true', 'false', 'true'];

let arr7: Array<string> = new Array();

// 元组
let x :[string, number, boolean] = ['alice', 10, true];

// 日期对象
let date: Date = new Date();
console.log('date= ', date);
date = new Date(1000); // 从1970年01月01日 00:00:00开始，增加1s
console.log('date= ', date);
date = new Date('2018/09/07 05:00:00');
console.log('date= ', date);