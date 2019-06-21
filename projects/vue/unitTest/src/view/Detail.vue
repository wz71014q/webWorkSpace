<template>
  <div id="detail">
    Hello Detail!
    <div class="goBack" @click="goBack">
      Go Back
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.goBack {
  width: 80px;
  height: 40px;
  background: aqua;
  border: 1px solid black;
  text-align: center;
  &::after {
    content: '';
    width: 0;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
