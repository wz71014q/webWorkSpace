<template>
  <div>
    hello! this is index! {{ count }}
    <input type="button" value="toHome" @click="toHome"/>
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
  },
  mounted() {
  },
  methods: {
    toHome() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>

<style scoped>
</style>
