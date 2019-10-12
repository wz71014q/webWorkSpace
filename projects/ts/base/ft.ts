// ts 函数
function searchSomething(age: number): string {
  return '年龄是：' + age;
}

let age: number = 18;

let res = searchSomething(age);

// console.log(res);

// 可选参数
function search(age:number, body?: string):string {

  let res: string = '';
  if (body) {
    res = 'search: ' + age + body;
  } else {
    res = 'search: ' + age;
  }
  return res
}

// let rss = search(22);
// console.log(rss);
// rss = search(22, 'big ass');
// console.log(rss);

// 默认参数
// function searchPerson(age:number = 18, body: string = 'big ass'):string {
//   let res: string = '';
//   res = 'search: ' + age + body;
//   return res
// }
// let rss = searchPerson(22);
// console.log(rss);
// rss = searchPerson(22, 'beautidul pussy');
// console.log(rss);

// 扩展运算符
function searchPerson(...needed: string[]):string {
  let res: string = '';
  res = needed.reduce((pre, cur) => pre + ', ' + cur);
  return res
}
let rss = searchPerson('big ass', 'beautidul pussy');
console.log(rss);

export {}