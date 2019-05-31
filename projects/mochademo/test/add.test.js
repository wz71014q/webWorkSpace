// add.test.js
let add = require('./add.js');
let expect = require('chai').expect;

describe('Demo', () => {
  describe('方法1', () => {
    before(() => {
      console.log('测试之前');
    });
    after(() => {
      console.log('测试之后');
    });
    beforeEach(() => {
      console.log('每条测试之前');
    });
    afterEach(() => {
      console.log('每条测试之后');
    });
    context('情景1', () => {
      it('测试1', () => {
        expect(add(1, 1)).to.be.equal(2);
      });
      it('测试2', () => {

      });
    });
  });
});
