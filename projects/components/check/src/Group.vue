<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Group",
  data() {
    return {
      checkList: []
    };
  },
  props: {
    single: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  provide() {
    return {
      groupInstance: this
    }
  },
  methods: {
    select(val) {
      if (this.single) {
        this.checkList[0] = val;
        this.$emit('input', val);
      } else {
        this.checkList.push(val);
        console.log(`select${this.checkList}`);
        this.$emit('input', this.checkList);
      }
    },
    unselect(val) {
      if (this.single && this.checkList.length > 0) {
        this.checkList = [];
        this.$emit('input', '');
      } else {
        this.checkList.splice(val);
        console.log(`unselect${this.checkList}`);
        this.$emit('input', this.checkList);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
</style>