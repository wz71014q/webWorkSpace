let obj = {
  age: 18,
  height: 30,
  name: 'alice',
};

let arr1: number[];
let arr2: boolean[];
let arr3: string[];

let arr4: number[] = [1, 2, 3, 4, 5];

let arr5: boolean[] = [ true, true, false ];

let arr6: string[] = ['true', 'false', 'true'];

let arr7: string[] = new Array();

// 元组
let x: [string, number, boolean] = ['alice', 10, true];

// 日期对象
let date: Date = new Date();
console.log('date= ', date);
date = new Date(1000); // 从1970年01月01日 00:00:00开始，增加1s
console.log('date= ', date);
date = new Date('2018/09/07 05:00:00');
console.log('date= ', date);
