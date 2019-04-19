import './index.html';
import './style.css';

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
