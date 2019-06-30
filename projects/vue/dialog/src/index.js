import Vue from 'vue';
import Dialog from './Dialog';

const Constuctor = Vue.extend(Dialog);

function createDialog(options) {
    const vm = new Constuctor({
      el: document.createElement('div'),
      propsData: {
        title: options.title,
        confirmText: options.confirmText,
        cancelText: options.cancelText
      },
    })
    document.body.appendChild(vm.$el);
}
function showDialog() {
  Vue.prototype.$showDialog = createDialog;
}
export default showDialog;