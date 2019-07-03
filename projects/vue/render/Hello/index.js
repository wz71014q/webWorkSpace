import Hello from './hello';

const install = function (Vue) {
  Vue.component(Hello.name, Hello);
};

export default install;

export { Hello };
