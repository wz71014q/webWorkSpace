<script>
import Vue from 'vue';
import Hello from './hello';
// import createVue from './utils';

Vue.component(Hello.name, Hello);
// const vm = createVue({
//   template: '<div id="element" :class="{show: show}" @click="handleClick">我是extends组件<Hello>hello world</Hello></div>',
//   data() {
//     return {
//       show: true
//     };
//   },
//   methods: {
//     handleClick() {
//       console.log('clicked');
//     }
//   },
// }, '#mountnode');

const Constructor = Vue.extend({
  template: '<div id="element" >我是extends组件<Hello>hello world</Hello></div>'
});
const vm = new Constructor().$mount('#mountnode');
console.log(vm);


Vue.component('ele', {
  template: '<div id="element" :class="{show: show}" @click="handleClick">我是ele组件</div>',
  data() {
    return {
      show: true
    };
  },
  methods: {
    handleClick() {
      console.log('clicked');
    }
  },
});

export default Vue.use(new Vue({
  el: '#app'
}));

</script>