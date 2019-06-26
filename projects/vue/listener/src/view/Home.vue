<template>
  <div class="home">
    <p @click="toChild">这是Home组件</p>
    <Menu @event1="eventA"/>
  </div>
</template>

<script>
import Menu from './Menu';

export default {
  name: 'Home',
  components: {
    Menu
  },
  data() {
    return {
      msg: 'picker'
    };
  },
  computed: {
  },
  watch: {
    count(newv) {
      this.msg = newv;
    }
  },
  mounted() {
  },
  methods: {
    toChild() {
      this.$router.push({ name: 'Menu' });
    },
    eventA() {
      console.log('hello, this is eventA');
    },
    eventB() {
      console.log('hello, this is eventB');
    }
  }
};
</script>

<style lang="scss" scoped>
$fontSize: 30px;
.home {
  font-size: $fontSize;
}
</style>
