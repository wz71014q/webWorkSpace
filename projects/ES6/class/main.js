import './index.html';
import './style.css';

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.Height = 100;
  }
  speak() {
    return this.name + ', speak';
  }
  static voice() { // Animal类自身的静态方法
    return 'this is my voice';
  }
  get height() {
    return this.age * 30;
  }
  set height(val) {
    this.Height += val;
  }
}
const cat = new Animal('Tom', 18);
cat.height = 100;
// console.log(cat.height);
// console.log(cat, cat.__proto__, cat.speak(), Animal.voice());

class Dog extends Animal {
  constructor(...args) {
    super(...args); // 继承自父类
    this.speak = 'bar';
    super.Height = 300; // 这里的super = this, 即this.Height = 300
    console.log(super.Height); // 100, 这里就是父类原型对象了
  }
  dogSpeak() {
    return super.speak(); // 调用父类的speak()方法，相当于dogSpeak() = Animal.prototype.speak()
  }
}
const hunt = new Dog('snowb', 20);
// console.log(hunt, hunt.height, hunt.speak, Dog.voice(), hunt.dogSpeak());
console.log(hunt, hunt.__proto__ === Dog.prototype);
console.log(Dog.__proto__ === Animal);
console.log(Dog.prototype.__proto__ === Animal.prototype);
// const farther = Object.getPrototypeOf(hunt); // 获取父类
// console.log(farther);
