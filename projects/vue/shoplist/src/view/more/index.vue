<template>
  <!-- 主页 -->
  <div class="offline-page">
    <div class="offline-header">
      <NavBar @goback="goBack"/>
    </div>
    <div class="offline-body">
      <img
        src="../../assets/img/offline.png"
        class="offline-img">
      <div class="offline-prompt">
        <span>{{ $language('offline.prompt') }}</span>，
        <span
          class="offline-detail border-1px"
          @click="offlineDetail">{{ $language('offline.detail') }}</span>
      </div>
    </div>
    <div class="offline-foot"/>
    <OfflineTips
      v-show="tipFlag"
      @cancleOfflineTips="cancleOfflineTips"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NavBar from '../../components/NavBar';
import OfflineTips from '../../components/OfflineTips';

export default {
  name: 'Offline',
  components: {
    NavBar,
    OfflineTips
  },
  data() {
    return {
      tipFlag: false
    };
  },
  computed: {
    ...mapState({
      isOffline: state => state.deviceInfo.deviceState
    }),
  },
  watch: {
    /**
     * @function isOffline
     * @param {number} newv
     * @description 设备上线时返回主页
     */
    isOffline: function updateOffline(newv) {
      if (newv === 2 || newv === 3) {
        this.$router.push({path: '/'});
      }
    },
  },
  methods: {
    /**
     * @function goBack
     * @description 返回键
     */
    goBack() {
      closePage();
    },
    /**
     * @function offlineDetail
     * @description 查看详情
     */
    offlineDetail() {
      this.tipFlag = true;
    },
    cancleOfflineTips() {
      this.tipFlag = false;
    }
  },
};
</script>
<style lang="scss" scoped>
// 必须用统一的适配方案
@import '../../../../../static/ui/style/index.scss';
.offline-page {
  width: 100%;
  height: 100%;
  background: url('../../assets/img/bg_body.png') no-repeat;
  background-size: 100% 100%;
  .offline-header {
    width: 100%;
    height: 30%;
  }
  .offline-body {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 0.4rem;
    .offline-prompt {
      padding-top: 0.5rem;
    }
    .offline-img {
      width: 3rem;
    }
    .offline-detail {
      padding-bottom: 1px;
      @include border-bottom-1px(#00aeff);
      color: #00aeff;
    }
  }
  .offline-foot {
    width: 100%;
    height: 40%;
  }
}
</style>
