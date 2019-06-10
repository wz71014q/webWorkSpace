<script>
import Vue from 'vue';

Vue.component('renderTxt', {
  render(createElement) {
    return createElement(
      'div',
      {
        class: {
          show: this.show
        },
        attrs: {
          id: 'txt'
        },
        on: {
          click: this.handleClick
        }
      },
      'i\'m render text'
    );
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    handleClick() {
      console.log('render click');
    }
  }
});

export default Vue.use(new Vue({
  el: '#render'
}));
</script>