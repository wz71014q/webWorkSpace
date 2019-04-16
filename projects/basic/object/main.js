import './index.html';
import './style.css';

const person = {};
// 这四个属性是JS的数据属性
Object.defineProperty(person, 'name', {
  configurable: false, // 该属性不能通过delete删除
  writable: false, // 该属性不可被修改
  Enumerable: false, // 该属性不能被for...in循环返回
  value: 'Json' // 该属性的数据值
});
person.age = 18;
person.sayHi = () => {
  console.log('Hi');
};

function init() {
  document.querySelector('#app').innerHTML = person.name;
  person.sayHi();
  try {
    person.name = 'Jhon'; // 无法重新修改
  } catch (error) {
    console.error(error);
  }
  delete (person.name); // 无法删除
  Object.defineProperty(person, 'name', { // 无法重新定义
    configurable: true
  });
  person.name = 'Jhon';
  document.querySelector('#app').innerHTML = person.name;
}
// init();

// configurable、Enumerable、set、get属性是JS的访问器属性
const book = {
  _year: 2004,
  edition: 1,
  variable: false
};

Object.defineProperty(book, 'year', {
  get: function getter() {
    return this._year;
  },
  set: function setter(newValue) {
    if (newValue > 2004) {
      this._year = newValue;
      this.edition += newValue - 2004;
      this.variable = true;
    }
  }
});

console.log(book._year);
book.year = 2006;
console.log(book);

// Object.getOwnPropertyDescriptor()方法用于获取给定属性的描述
const prptyOfBook = Object.getOwnPropertyDescriptor(book, 'year');
console.log(prptyOfBook.set);
