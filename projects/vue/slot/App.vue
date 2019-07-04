<template>
  <div>
    <Home>
      <div @click="">something</div>
    <p @click="showChild">this is father component start</p>
    <child>
      <p class="anonymous">hello child</p>
      <template #nameSlot>
        <div class="wrapper">
          <p>
            hello nameSlot
          </p>
        </div>
      </template>
      <template #scope="childProps">
        <div class="childProps" v-for="(item, index) in childProps" :key="index">
          {{ item }}
        </div>
      </template>
    </child>
    <p>this is father component end</p>
    </Home>
    <ExtendItem/>
  </div>
</template>

<script>
import Home from './src/Home.vue';
import child from './src/child.vue';
import ExtendItem from './src/extendItem';

console.log(child, child.methods);
console.log(ExtendItem);

export default {
  name: 'App',
  components: {
    Home,
    child,
    ExtendItem
  },
  data() {
    return {
    };
  },
  computed: {
  },
  watch: {
  },
  mounted() {
    // console.log(this);
  },
  methods: {
    showChild(val) {
      console.log(this.$children[0]._uid, val);
    }
  }
};
</script>

<style scoped>
.wrapper{
  color: aquamarine;
  background: #000;
}
.anonymous {
  font-size: 50px;
}
.childProps{
  color: aqua;
  background: rgba(0, 0, 0, 0.822);
}
</style>
