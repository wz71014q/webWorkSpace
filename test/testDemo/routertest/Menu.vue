<template>
  <div id="child">
    child router
    <div class="username" @click="toHome">
      {{ $route.params.username }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Child',
  methods: {
    toHome() {
      this.$router.push({ name: 'home' });
    }
  }
};
</script>