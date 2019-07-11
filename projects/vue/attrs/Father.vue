<template>
  <div>
    <Child
      :name="name"
      :age="18"
      :gender="女"
      :height="158"
      title="程序员成长指北"
    ></Child>
  </div>
</template>

<script>
import Child from './Child';

export default {
  components: { Child },
  data() {
    return {
      name: "zhang",
      age: "18",
      gender: "女",
      height: "158"
    };
  }
};
</script>