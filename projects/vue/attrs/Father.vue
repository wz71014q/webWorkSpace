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
  }
};
</script>