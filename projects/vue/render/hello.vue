<template>
  <div>
    hello {{ msg }}
    <p class="text">I'm jest demo</p>
    <button class="count" @click="increment">Increment {{ count }}</button>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'Hello',
  data() {
    return {
      msg: 'picker',
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>
