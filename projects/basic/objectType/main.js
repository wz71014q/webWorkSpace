import './index.html';
import './style.css';
// 创建对象的几种方法
// 1、工厂模式
function createPerson(name, age, job) {
  let o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  return o;
}
const person1 = createPerson('Jhon', 18, 'Web');
console.log(person1);

// 2、构造函数模式
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = sayName;
}
function sayName() {
  console.log(this.nmae);
}
const person2 = new Person('Joe', 20, 'JAVA');
console.log(person2);

// 3、原型模式
function PersonA() {}
PersonA.prototype = {
  name: 'Jhon',
  height: 180
};
PersonA.prototype.age = 18;
PersonA.prototype.sayName = function () {
  console.log(this.name);
};
const person3 = new PersonA();
person3.sayName();
console.log(PersonA.prototype);
console.log(Object.getPrototypeOf(person3)); // 获取该对象的原型
console.log(person3.hasOwnProperty('name')); // 检测当前对象（不从原型检测）是否含有该属性
console.log(Object.getOwnPropertyNames(PersonA));
