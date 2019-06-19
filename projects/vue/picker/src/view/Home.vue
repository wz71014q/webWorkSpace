<template>
  <div>
    hello {{ msg }}
    <img :src='img' @click="setData">
    {{ $t('home') }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Index',
  data() {
    return {
      msg: 'picker',
      img: require('@/images/applePC.jpg')
    };
  },
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  watch: {
    count(newv, oldv) {
      console.log(newv, oldv);
      this.msg = newv;
    }
  },
  mounted() {
  },
  methods: {
    setData() {
      this.$store.dispatch('updateCount', 'home');
    },
    test(res) {
      console.log(this.$listeners);
      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper{
  color: aquamarine;
  background: #000;
}
</style>
