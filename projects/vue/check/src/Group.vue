<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Group",
  data() {
    return {};
  },
  props: ['value'],
  methods: {
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
</style>