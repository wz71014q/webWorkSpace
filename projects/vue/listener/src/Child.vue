<template>
  <div class="child">
    I'm the child
    <Grandson v-on="$listeners"/>
  </div>
</template>

<script>
import Grandson from './Grandson.vue';

export default {
  name: 'Child',
  components: { Grandson },
};
</script>

<style lang="scss" scoped>
.child {
  padding: 30px;
  border: 1px solid #ff0;
}
</style>