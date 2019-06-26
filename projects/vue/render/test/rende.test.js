import { createVue } from '../utils';

let vm;

it('create', ()=>{
  vm = createVue({
    template: '<div id="home" >我是Home组件<Hello>hello world</Hello></div>'
  }, true);
  expect(vm.$el.querySelector('.text').innerHTML).toBe('I\'m jest demo');
})
