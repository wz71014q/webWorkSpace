<template>
  <div>
    这是父组件
    -------------------------
    <Child
      :name="name"
      age="18"
      sex="女"
      height="158"
      title="A Girl"
      id="child"
      @getChildData="setData"
      @getDataFromChild="getData"
    >
    </Child>
  </div>
</template>

<script>
import Child from './Child';

export default {
  name: 'Father',
  components: { Child },
  data() {
    return {
      name: "Alice"
    };
  },
  methods: {
    setData() {
      console.log('this is from child');
    },
    getData() {
      console.log('this is from kid');
    }
  }
};
</script>