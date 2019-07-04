<script>
import Vue from "vue";
import Child from "./child";

Vue.component("renderTxt", {
  render(createElement, context) {
    console.log(context);
    return createElement(
      "div",
      [
        createElement("h1", "一则头条"),
        createElement(Child, "hhhhhhChildhhhhh")
      ],
      {
        class: {
          show: this.show
        },
        attrs: {
          id: "txt"
        },
        on: {
          click: this.handleClick
        }
      },
      "i'm render text"
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
      console.log("render click");
    }
  }
});

// 注册全局组件renderTxt，并将其挂载在#render
export default Vue.use(
  new Vue({
    el: "#render"
  })
);
</script>