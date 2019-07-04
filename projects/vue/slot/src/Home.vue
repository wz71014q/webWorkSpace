<template>
  <div>
    <slot></slot>
    <div @click="getFather">getFather</div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  methods: {
    getFather() {
      this.$parent.showChild(this._uid);
    }
  }
};
</script>

<style scoped>

</style>
