<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
    };
  },
  methods: {
    open(uid) {
      console.log(uid, this.$children[0]._uid);
      console.log(this.$children[0].show);
      this.$children[0].getChild();
    }
  }
};
</script>
