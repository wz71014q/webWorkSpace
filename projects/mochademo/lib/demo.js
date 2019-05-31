class Demo {
  constructor() {
    this.name = 'demo';
  }
  static subtotal(unitPrice, quantity) {
    return unitPrice * quantity;
  }
  foo() {
    return this.name + 'hahaha';
  }
  static waitTimer(data, callback) {
    setTimeout(() => {
      callback(data);
    }, 3000);
  }
}

module.exports = Demo;
// export default Demo;
