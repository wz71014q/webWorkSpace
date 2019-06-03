
import { mount } from '@vue/test-utils';
import hello from '../testDemo/hello.vue';

let wrapper;

describe('vue组件测试', () => {
  beforeEach(() => { // 每次测试前确保我们的测试实例都是是干净完整的。返回一个wrapper对象
    wrapper = mount(hello);
  });
  it('renders a div', () => {
    expect(wrapper.contains('div')).toBe(true);
  });
  it('p标签的内容是I\'m jest demo', () => {
    expect(wrapper.find('.text').text())
      .toEqual('I\'m jest demo');
  });
  it('计数器', () => {
    const button = wrapper.find('.count');
    button.trigger('click');
    expect(button.text())
      .toEqual('Increment 1');
  });
});
