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
console.log(cat.height);
console.log(cat, cat.__proto__, cat.speak(), Animal.voice());
