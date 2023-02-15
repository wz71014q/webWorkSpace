<template>
  <div class="grandson">
    I'm the Grandson
    <div @click="toFather">click me</div>
  </div>
</template>

<script>

export default {
  name: 'Grandson',
  data() {
    return {
      msg: 'I am the Grandson',
    };
  },
  methods: {
    toFather() {
      this.$emit('update', this.msg);
    }
  },
};
</script>

<style lang="scss" scoped>
.grandson {
  padding: 30px;
  border: 1px solid #f00;
}
</style>