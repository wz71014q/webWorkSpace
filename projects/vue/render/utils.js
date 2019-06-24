import Vue from 'vue';
/**
 * 创建一个 Vue 的实例对象
 * @param  {Object|String}  Component   组件配置，可直接传 template
 * @param  {Boolean=false} mounted 是否挂载到 DOM 上
 * @return {Object} vm
 */
const createVue = function(Component, mountednode = null) {
  if (Object.prototype.toString.call(Component) === '[object String]') {
    Component = { template: Component };
  }
  const Constructor = Vue.extend(Component);
  const vm = new Constructor().$mount(mountednode);
  return vm;
};

export default createVue;