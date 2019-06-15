<template>
  <div>
    hello {{ msg }}
    <img :src='img' @click="setData">
    <child @test="test">
      <p>hello child</p>
      <div class="wrapper" slot="nameSlot">
        <p>
          hello nameSlot
        </p>
      </div>
    </child>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import child from './child.vue';

export default {
  name: 'Picker',
  components: {
    child
  },
  data() {
    return {
      msg: 'picker',
      img: require('@/images/book.png')
    };
  },
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  watch: {
    count(newv, oldv) {
      console.log(newv, oldv);
      this.msg = newv;
    }
  },
  mounted() {
    this.$store.dispatch('updateCount', 5);
  },
  methods: {
    setData() {
      this.$store.dispatch('updateCount', 5);
    },
    test(res) {
      console.log(this.$listeners);
      console.log(res);
    }
  }
};
</script>

<style scoped>
.wrapper{
  color: aquamarine;
  background: #000;
}
</style>
