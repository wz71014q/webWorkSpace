const Demo = require('../projects/mochademo/lib/demo');

const chai = require('chai');

const expect = chai.expect;

const demo = new Demo();
describe('Demo', () => {
  // this.timeout(5000);
  it('单价10元， 三件商品总价应该是30', () => {
    let subtotal = Demo.subtotal(10, 3);
    expect(subtotal).to.equal(30);
    expect(demo.foo()).to.be.equal('demohahaha');
  });
  it('异步测试', (done) => {
    Demo.waitTimer('hello', (data) => {
      expect(data).to.be.equal('hello');
      done();
    });
  });
});
