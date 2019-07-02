import Vue from 'vue';
import Dialog from './Dialog';

const Constuctor = Vue.extend(Dialog);

const defaultCallBack = () => {
  console.log('defaultCallBack');
}

function createDialog(options) {
  const vm = new Constuctor({
    el: document.createElement('div'),
    propsData: {
      content: options.content,
      confirmText: options.confirmText,
      cancelText: options.cancelText
    }
  })
  const callbackOk = options.confirm ? options.confirm : defaultCallBack;
  const callbackCancel = options.cancel ? options.cancel : defaultCallBack;
  document.body.appendChild(vm.$el);
  Vue.nextTick(() => {
    vm.showDialog = true;
  });
  vm.$on('confirm', () => {
    callbackOk();
  });
  vm.$on('cancel', () => {
    callbackCancel();
    vm.showDialog = false;
    vm.$el.addEventListener('transitionend', removeDom);
  });
  let removeDom = event => {
    console.log(event.target.parentNode);
    if (event.target.parentNode) {
      vm.$destroy();
      event.target.parentNode.removeChild(event.target);
    }
  };
}

function showDialog() {
  Vue.prototype.$showDialog = createDialog;
}

export default showDialog;