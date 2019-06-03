import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import picker from '../testDemo/picker.vue';

let wrapper;

describe('vue组件测试', () => {
  beforeEach(() => { // 每次测试前确保我们的测试实例都是是干净完整的。返回一个wrapper对象
    wrapper = shallowMount(picker, {
      computed: {
        count() {
          return 1;
        }
      }
    });
  });
  it('renders a div', () => {
    expect(wrapper.contains('div')).toBe(true);
  });
  test('Should have a div with a class .img', () => {
    const img = wrapper.find('.img'); // 通过find来查找dom或者vue实例
    expect(img.text()).toEqual('666');
    // expect(img.length).toBe(1); // 应该有个.img
    // expect(img).toBeTruthy(); // 只要断言条件不为空或这false，toBeTruthy就能通过。
  });
});
