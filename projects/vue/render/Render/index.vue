<script>
import Vue from 'vue';
import Child from '../../slot/src/child';

Vue.component('renderTxt', {
  render(createElement, context) {
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
  childVNodeList: [Child],
  name: "Render",
  methods: {
    handleClick() {
      console.log('render click');
    }
  },
  slot: {
    default: '<div class="defaultSlot">defaultSlot</div>',
    nameSlot: '<div class="nameSlot">nameSlot</div>'
  }
});

// 注册全局组件renderTxt，并将其挂载在#render
export default Vue.use(new Vue({
  el: '#render'
}));
</script>