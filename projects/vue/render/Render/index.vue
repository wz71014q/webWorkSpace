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
  name: "Render",
  methods: {
    handleClick() {
      console.log('render click');
    }
  }
});

// 注册全局组件renderTxt，并将其挂载在#render
export default Vue.use(new Vue({
  el: '#render'
}));
</script>