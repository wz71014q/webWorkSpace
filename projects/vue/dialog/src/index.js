import Vue from 'vue';
import Dialog from './Dialog';

const Constuctor = Vue.extend(Dialog);

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

function createDialog(options) {
  const vm = new Constuctor({
    el: document.createElement('div'),
    propsData: {
      content: options.content,
      confirmText: options.confirmText,
      cancelText: options.cancelText,
      showDialog: true
    },
    methods: {
      confirmHandle: options.confirm,
      cancelHandle: options.cancel,
    }
  })
  document.body.appendChild(vm.$el);
  vm.$on('confirm', () => {
    console.log('confirm');
  });
  vm.$on('cancel', () => {
    console.log('cancel');
    vm.$el.addEventListener('transitionend', removeDom);
    setTimeout(() => {
      vm.$destroy();
      document.body.removeChild(vm.$el);
    }, 500);
  });
}

function showDialog() {
  Vue.prototype.$showDialog = createDialog;
}

export default showDialog;