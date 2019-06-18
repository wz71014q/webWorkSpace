<template>
  <!-- 模式 -->
  <div class="mode-main">mode</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Mode',
  components: {
  },
  mixins: [],
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      dataObject: state => state.dataObject,
    }),
  },
  mounted: function init() {
  },
  methods: {
    ...mapMutations({
      updateModeName: 'MODE_NAME',
      setDataObject: 'SET_DATA_OBJECT',
    }),
    ...mapActions({
      sendCtrl: 'SEND_CTRL',
    }),
  },
};
</script>
<style lang="scss" scoped>
// 必须用统一的适配方案
@import '../../../../../static/ui/style/index.scss';
.mode-main {
  @include font-size(16px);
}
</style>
