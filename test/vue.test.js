
import { mount } from '@vue/test-utils';
import picker from '../projects/vue/picker/src/Picker.vue';
import Counter from './vuedemo';

const wrapper = mount(picker);

const vm = wrapper.vm;

console.log(wrapper);

// describe('Counter', () => {
//   const wrapper = mount(Counter);

//   it('renders the correct markup', () => {
//     expect(wrapper.html()).toContain('<span class="count">0</span>');
//   });

//   // it's also easy to check for the existence of elements
//   it('has a button', () => {
//     expect(wrapper.contains('button')).toBe(true);
//   });

//   it('button should increment the count', () => {
//     expect(wrapper.vm.count).toBe(0);
//     const button = wrapper.find('button');
//     button.trigger('click');
//     expect(wrapper.vm.count).toBe(1);
//   });
// });
