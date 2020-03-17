<template>
  <div>
    <Group single v-model="checkList">
      <Check itemName="单选框 A">单选框 A</Check>
      <Check itemName="单选框 B">单选框 B</Check>
      <Check itemName="单选框 C">单选框 C</Check>
      <Check itemName="单选框 D" disabled>单选框 D</Check>
      <Check itemName="单选框 E" disabled>单选框 E</Check>
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
  text-align: center;
  background: aqua;
  &::after {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
    content: "";
  }
}
</style>
