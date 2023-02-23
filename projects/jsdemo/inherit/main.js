import './index.html';
import './style.css';

// JS继承的方式，一种是原型链，如下demo

/**
 * @function SuperType
 * @description 构造函数A
 */
function SuperType() {
  this.property = true;
  this.supProperty = true;
}
SuperType.prototype.getSuperValue = function () {
  return this.supProperty;
};
const mySuperType = new SuperType();

console.log(mySuperType);

// 构造函数B

function SubType() {
  this.property = false;
  this.subproperty = false;
}
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};
const mySubType = new SubType();

const mySubTypeProto = Object.getPrototypeOf(mySubType); // Object.getPrototypeOf(obj) === obj.__proto__;
console.table('mySubType：', mySubType, '，mySubType原型：', mySubTypeProto, '，mySubType继承自SuperType原型的属性：', Object.getPrototypeOf(mySubTypeProto));
console.log(mySubType, mySubType.__proto__, mySubType.__proto__.__proto__);


// 另一种是借用构造函数
function Animal(name, leg) {
  this.name = name;
  this.leg = leg;
}

function Cat(name, leg) {
  Animal.call(this, name, leg);
}
const Tom = new Cat('Tom', 8);
console.log('Tom是通过构造函数继承了Animal的属性:', Tom.name, Tom.leg);

// 原型式继承, Object.create()。具体原理如下
function creatObject(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

const person = {
  name: 'Person',
  friends: ['joe', 'jhon', 'alice']
};
const personTom = creatObject(person);
const personAli = creatObject(person);
personTom.friends.push('Jack');
console.log(personTom);
console.log(personAli);
// 用Object.create()实现上述继承方式
let personBeal = Object.create(person, { heigt: { value: 180 } });
console.log('personBeal', personBeal);
