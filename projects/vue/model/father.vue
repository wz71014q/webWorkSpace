<template>
  <div class="father">
    this is father, the child msg: {{ msg }}
    <child  v-model="msg"/>
  </div>
</template>

<script>
import child from './child.vue';

export default {
  name: 'father',
  components: {
    child
  },
  data() {
    return {
      msg: ''
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped>
.btn {
  border: 1px solid aqua;
}
.btn:active {
  background-color: aquamarine;
}
</style>
