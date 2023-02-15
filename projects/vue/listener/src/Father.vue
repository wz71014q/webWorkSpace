<template>
  <div class="father">
    I'm the father
    <Child @update="update"/>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  name: 'Father',
  components: { Child },
  methods: {
    update(val) {
      console.log('I am the father', val);
    }
  }
};
</script>

<style lang="scss" scoped>
.father {
  padding: 30px;
  border: 1px solid #000;
}
</style>