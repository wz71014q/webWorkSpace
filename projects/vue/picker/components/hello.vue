<template>
  <div>
    hello {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      msg: 'world'
    }
  }
}
</script>