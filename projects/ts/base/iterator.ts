// 对象接口
interface getData {
  sex: string
  readonly interest: string
  house?: boolean
}

let myData:getData = {sex: 'male', interest: 'mile', house: false};
console.log(myData);

// 函数接口
interface Search {
  (source: string, substring:string):boolean
}

let mySearch:Search;

mySearch = function(source: string, substring:string):boolean {
  let falg = source.search(substring);
  return (falg!==-1);
}

console.log(mySearch('高, 富, 白, 美', '美'));