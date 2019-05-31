<template>
  <div>
    hello {{ msg }}
    <img :src='img' @click="setData">
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Picker',
  data() {
    return {
      msg: 'picker',
      img: require('@/images/book.png')
    };
  },
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  watch: {
    count: function(newv, oldv) {
      console.log(newv, oldv);
      this.msg = newv;
    }
  },
  mounted() {
    this.$store.dispatch('updateCount', 5);
  },
  methods: {
    setData() {
      this.$store.dispatch('updateCount', 5);
    }
  }
};
</script>

<style scoped>

</style>
