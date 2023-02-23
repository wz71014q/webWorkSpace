class Operation {
  a = 0;
  b = 0;
  static createOperate(operation) {
    let ope;
    switch (operation) {
      case '+':
        ope = new operationAdd();
        break;
        case '*':
          ope = new operationMul();
          break;
        default:
          ope = new operationAdd();
          break;
    }
    return ope;
  }
  getResult() {
    return 0;
  }
}

class operationAdd extends Operation {
  getResult() {
    return this.a + this.b;
  }
}

class operationMul extends Operation {
  getResult() {
    return this.a * this.b;
  }
}

const myOperation = Operation.createOperate('*');
myOperation.a = 10;
myOperation.b = 3;
const result = myOperation.getResult();
console.log('result: ', result);
