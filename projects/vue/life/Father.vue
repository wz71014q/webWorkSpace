<template>
  <div>
    <p>father</p>
    <Child></Child>
    <input type="text" name="text" v-model="msg">
    <div>{{ msg }}</div>
    <button @click="$router.push({name: 'Grand'});">to Grand</button>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  name: 'father',
  components: {
    Child
  },
  data() {
    return {
      msg: ''
    };
  },
  beforeCreate() {
    console.log('%cfather beforeCreate', 'color: green; font-size: 15px');
  },
  created() {
    console.log('%cfather created', 'color: green; font-size: 15px');
  },
  beforeMount() {
    console.log('%cfather beforeMount', 'color: green; font-size: 15px');
  },
  mounted() {
    console.log('%cfather mounted', 'color: green; font-size: 15px');
  },
  beforeUpdate() {
    console.log('%cfather beforeUpdate', 'color: green; font-size: 15px');
  },
  updated() {
    console.log('%cfather updated', 'color: green; font-size: 15px');
  },
  beforeDestroy() {
    console.log('%cfather beforeDestroy', 'color: green; font-size: 15px');
  },
  destroyed() {
    console.log('%cfather destroyed', 'color: green; font-size: 15px');
  }
};
</script>
