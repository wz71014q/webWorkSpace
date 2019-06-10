<script>
import Vue from 'vue';

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