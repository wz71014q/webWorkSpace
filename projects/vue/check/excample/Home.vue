<template>
  <div>
    <Group v-model="checkList">
      <Check :itemName="1">复选框 A</Check>
      <Check :itemName="2">复选框 B</Check>
      <Check :itemName="3">复选框 C</Check>
      <Check :itemName="4" disabled>复选框 D</Check>
      <Check :itemName="5" disabled>复选框 E</Check>
    </Group>
    <Model v-model="checkList"/>
    <div>选择的有：{{ checkList }}</div>
  </div>
</template>

<script>
import Group from "../src/Group";
import Check from "../src/Check";
import Model from '../src/Model';

export default {
  name: "Home",
  components: {
    Group,
    Check,
    Model
  },
  data() {
    return {
      checkList: '100'
    };
  },
  watch: {
    checkList() {
      this.select();
    }
  },
  methods: {
    select() {
      console.log(this.checkList);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  width: 200px;
  height: 100px;
  background: aqua;
  text-align: center;
  &::after {
    content: "";
    height: 100%;
    width: 0;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
