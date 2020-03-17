<template>
  <div>
    <div>
      <button @click="$router.push({name: 'Father'});">to Father</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Grand',
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
  }
};
</script>
