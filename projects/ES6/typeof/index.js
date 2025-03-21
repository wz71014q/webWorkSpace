console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
const objA = {
  a: 0,
  b: 1
};
const arrA = ['0', '1', 2, 3, 4];
console.log(objA.valueOf());
console.log(arrA.valueOf());
console.log(parseInt('0123a44', 10));
console.log(0o10);
console.log(0x0123a44);
console.log(parseInt('0123a44', 8));

const numberA = 10;
console.log(numberA.toString());
console.log(numberA.toString(2));
console.log(numberA.toString(8));
console.log(numberA.toString(16));

// 构造函数：保存着用于创建当前对象的函数,如下面的Animal
function Animal() {
  this.pieces = '动物';
  this.leg = 'four';
}
Animal.prototype.head = true;
const cat = new Animal();
console.log(cat.head);


// instanceof 检测是否是指定的引用类型
console.log([0, 1] instanceof Array);
console.log(Animal instanceof Function);
