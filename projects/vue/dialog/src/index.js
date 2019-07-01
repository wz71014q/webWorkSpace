import Vue from 'vue';
import Dialog from './Dialog';

const Constuctor = Vue.extend(Dialog);

function createDialog(options) {
  const vm = new Constuctor({
    el: document.createElement('div'),
    propsData: {
      content: options.content,
      confirmText: options.confirmText,
      cancelText: options.cancelText
    },
  })
  document.body.appendChild(vm.$el);
  vm.$on('confirm', () => {
    console.log('confirm');
  });
  vm.$on('cancel', () => {
    console.log('cancel');
    document.body.removeChild(vm.$el);
    vm.$destroy();
  });
}
function showDialog() {
  Vue.prototype.$showDialog = createDialog;
}

export default showDialog;
