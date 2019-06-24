
import Vue from 'vue';
import sinon from 'sinon';
import { mount } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import hello from './testDemo/hello.vue';

let wrapper;
let vm;

describe('vue组件测试', () => {
  beforeEach(() => { // 每次测试前确保我们的测试实例都是是干净完整的。返回一个wrapper对象
    wrapper = mount(hello);
  });
  afterEach(() => {
    vm && vm.$destroy();
    wrapper && wrapper.destroy();
  }, 100);
  it('renders a div', () => {
    expect(wrapper.contains('div')).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('p标签的内容是I\'m jest demo', () => {
    expect(wrapper.find('.text').text())
      .toEqual('I\'m jest demo');
  });
  it('计数器', () => {
    const button = wrapper.find('.count');
    button.trigger('click');
    expect(button.text())
      .toEqual('Increment a 1');
    console.log(wrapper.vm.$data.count);
    button.trigger('click');
    expect(button.text())
      .toEqual('Increment a 2');
    console.log(wrapper.vm.$data.count);
  });
  it('querySelector', () => {
    const Constructor = Vue.extend(hello);
    vm = new Constructor().$mount();
    // console.log(vm.$el.querySelector('.text').textContent);
    // console.log(vm.$el.querySelector('.text').innerHTML);
    expect(vm.$el.querySelector('.text').innerHTML).toEqual('I\'m jest demo');
  });
  it('renderToString render component as a html', async () => {
    const str = await renderToString(hello);
    expect(str).toContain('<p class="text">I\'m jest demo</p>');
  });
  // it('spy', () => {
  //   const Constructor = Vue.extend(hello);
  //   vm = new Constructor().$mount();
  //   var incrementSpy = sinon.spy(vm, 'increment');
  //   vm.increment();
  //   console.log('incrementSpy.callCount' + incrementSpy.callCount);
  //   expect(incrementSpy).toHaveBeenCalled();
  //   incrementSpy.restore();
  // });
});
