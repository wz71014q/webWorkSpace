import Picker from './src/view/Index';

const install = function (Vue) {
  Vue.component(Picker.name, Picker);
};

export default install;

export { Picker };
