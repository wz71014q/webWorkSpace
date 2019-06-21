<template>
  <div id="home">
    Hello Home!
    <div class="toMenu" @click="toMenu">
      To Menu
    </div>
    <div class="toDetail" @click="toDetail">
      To Detail
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  methods: {
    toMenu() {
      this.$router.push({ name: 'Menu', params: { msg: 'this is Home' } });
    },
    toDetail() {
      this.$router.push({ name: 'Detail' });
    }
  }
};
</script>

<style lang="scss" scoped>
.toMenu, .toDetail {
  margin: 20px;
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
