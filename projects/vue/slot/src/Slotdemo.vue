<template>
  <div>
    hello {{ msg }}
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
  </div>
</template>

<script>
import child from './child.vue';

export default {
  name: 'Slotdemo',
  components: {
    child
  },
  data() {
    return {
      msg: 'Slotdemo'
    };
  },
  computed: {
  },
  watch: {
    count(newv, oldv) {
      console.log(newv, oldv);
    }
  },
  mounted() {
  },
  methods: {
    setData() {
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
