const sinon = require('sinon');

it('sinon的用法', () => {
  const spy = sinon.spy();
  spy('hello');
  console.log(spy.firstCall.args);

  let $route = {
    setName() {
      jest.fn();
      // console.log('name: ', this.name);
    }
  };
  // 为setName方法创建一个spy
  let setNameSpy = sinon.spy($route, 'setName');
  // 现在开始，每次调用这个方法时，相关信息都会被记录下来
  $route.setName('Darth Vader');
  // 通过spy对象可以查看这些记录的信息
  console.log(setNameSpy.callCount); // output: 1
  // 重要的最后一步，移除spy
  setNameSpy.restore();
});

