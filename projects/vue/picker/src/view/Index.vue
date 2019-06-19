<template>
  <div>
    hello! this is index! {{ count }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Index',
  data() {
    return {
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
    this.$store.dispatch('updateCount', 5);
  },
  methods: {
    setData() {
      this.$store.dispatch('updateCount', 5);
    },
    test(res) {
      console.log(this.$listeners);
      console.log(res);
    }
  }
};
</script>

<style scoped>
.wrapper{
  color: aquamarine;
  background: #000;
}
</style>
