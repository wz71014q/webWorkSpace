import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Home from '../../index';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('check index', () => {
  beforeEach(() => {
    wrapper = shallowMount(Home, {
      localVue,
      router
    });
  });
  afterEach(() => {
    vm && vm.$destroy();
    wrapper && wrapper.destroy();
  });
  it('router', () => {
    const btn = wrapper.find('input');
    btn.trigger('click');
  });
});
