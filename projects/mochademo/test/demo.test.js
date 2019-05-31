import Demo from '../lib/demo';

const chai = require('chai');

const expect = chai.expect;

// const demo = new Demo();
describe('Demo', () => {
  it('单价10元， 三件商品总价应该是30', () => {
    let subtotal = Demo.subtotal(10, 3);
    expect(subtotal).to.equal(30);
  });
});
