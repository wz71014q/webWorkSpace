<template>
  <div>
    <p @click="toHome">这是Menu组件</p>
    <img src="@/images/applePC.jpg" @click="$listeners">
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data() {
    return {
    };
  },
  computed: {
    events() {
      return Object.assign({},this.$listeners);
    }
  },
  watch: {
  },
  mounted() {
    console.log(this.$listeners);
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
