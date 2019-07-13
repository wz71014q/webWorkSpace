<template>
  <div>
    <div>
      child
      <input type="text" name="text" v-model="msg">
      <div>{{ msg }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'child',
  data() {
    return {
      msg: ''
    };
  },
  beforeCreate() {
    console.log('%cchild beforeCreate', 'color: red; font-size: 15px');
  },
  created() {
    console.log('%cchild created', 'color: red; font-size: 15px');
  },
  beforeMount() {
    console.log('%cchild beforeMount', 'color: red; font-size: 15px');
  },
  mounted() {
    console.log('%cchild mounted', 'color: red; font-size: 15px');
  },
  beforeUpdate() {
    console.log('%cchild beforeUpdate', 'color: red; font-size: 15px');
  },
  updated() {
    console.log('%cchild updated', 'color: red; font-size: 15px');
  },
  beforeDestroy() {
    console.log('%cchild beforeDestroy', 'color: red; font-size: 15px');
  },
  destroyed() {
    console.log('%cchild destroyed', 'color: red; font-size: 15px');
  }
};
</script>

<style scoped>
</style>
