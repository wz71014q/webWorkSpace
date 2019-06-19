<template>
  <div class="home">
    hello {{ msg }}
    {{ $t('home') }}
    <input type="button" value="toChild" @click="toChild">
    <img :src='img' @click="setData">
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
    count(newv) {
      this.msg = newv;
    }
  },
  mounted() {
  },
  methods: {
    setData() {
      this.$store.dispatch('updateCount', 'home');
    },
    toChild() {
      this.$router.push({ name: 'Index' });
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
