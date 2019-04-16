import Picker from './src/Picker.vue';

const install = function(Vue) {
  Vue.component(Picker.name, Picker);
}

export default install;

export {
  Picker
}
