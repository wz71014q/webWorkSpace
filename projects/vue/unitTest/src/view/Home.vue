<template>
  <div id="home">
    Hello Home!
    <p>this msg is {{ msg }}</p>
    <div class="toMenu" @click="toMenu">
      To Menu
    </div>
    <div class="toDetail" @click="toDetail">
      To Detail
    </div>
    <div class="setMsg" @click="setMsg">setMsg</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Detail',
  computed: {
    ...mapState({
      msg: state => state.msg
    })
  },
  methods: {
    toMenu() {
      this.$router.push({ name: 'Menu', params: { msg: 'this is Home' } });
    },
    toDetail() {
      this.$router.push({ name: 'Detail' });
    },
    setMsg() {
      this.$store.dispatch('updateMsg', 'dispatch success');
    }
  }
};
</script>

<style lang="scss" scoped>
.toMenu, .toDetail, .setMsg {
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
