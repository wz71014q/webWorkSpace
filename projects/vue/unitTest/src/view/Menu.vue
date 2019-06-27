<template>
  <div id="menu">
    Hello Menu
    <div class="username">
      {{ $route.params.msg }}
    </div>
    <div class="goBack" @click="goBack">
      Go Back
    </div>
    <div class="reSet" @click="reSet">reSet</div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  beforeRouteEnter(to, from, next) {
    if (from.name === 'Home') {
      console.log('my come in');
    }
    next();
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    reSet() {
      this.$store.dispatch('updateMsg', 'somthing');
    }
  }
};
</script>
<style lang="scss" scoped>
.goBack, .reSet {
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