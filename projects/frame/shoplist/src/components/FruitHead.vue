<template>
<!-- 头部返回键、设备名称、设置、状态 -->
  <div class="dash-board-container">
    <div class="status-preseting">
      <div>
        <p>当前状态</p>
        <span>正在榨汁</span>
      </div>
      <div class="line"></div>
      <div>
        <p>Time</p>
        <span>
          {{remainderHour}}
          </span> <p class="remainderText">小时</p>
          <span>{{remainderMin}}</span><p class="remainderText">分钟</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'FruitHead',
  data () {
    return {
    }
  },
  computed: {
    isTimeShow: function () {
      // 是否显示剩余时间
      var cookBegin = this.$store.getters.getDeviceStatus.isBegin
      var remainderTime = this.$store.getters.getCookTime
      console.log('remainderTime=' + remainderTime)
      if (remainderTime > 0 && cookBegin) {
        return true
      } else {
        return false
      }
    },
    remainderHour: function () {
      /* 显示小时 */
      var remainderTime = this.$store.getters.getCookTime
      if (remainderTime > 60) {
        return parseInt(remainderTime / 60)
      } else {
        return ''
      }
    },
    remainderMin: function () {
      /* 显示分钟 */
      var remainderTime = this.$store.getters.getCookTime
      if (remainderTime > 60) {
        return parseInt(remainderTime % 60)
      } else {
        return remainderTime
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dash-board-container {
  height: 40%;
  background: linear-gradient(rgb(154, 236, 236), rgba(111, 255, 176, 0.767));
}
.dash-board-container .status-cooking,
.status-preseting {
  color: #fff;
  text-align: center;
}
.dash-board-container .status-cooking p {
  /*  样式 */
  margin-top: 2%;
  font-size: 0.2rem;
}
.dash-board-container .status-cooking p:first-child {
  margin: 0;
  padding-top: 16%;
  padding-bottom: 4%;
  font-size: 0.18rem;
}
.dash-board-container .status-cooking span {
  font-size: 0.35rem;
}
.dash-board-container .status-preseting {
  display: -webkit-inline-flex;
  display: inline-flex;
  justify-content: space-around;
  width: 100%;

  /*  剩余时间 */
  padding-top: 10%;
}
.dash-board-container .status-preseting div {
  flex-basis: 50%;
}
.dash-board-container .status-preseting .line {
  flex-basis: 0;

  /* 中间竖条 */
  height: 0.7rem;
  margin-top: 12%;
  border-left: 1px solid #fff;
}
.dash-board-container .status-preseting p {
  font-size: 0.2rem;
}
.dash-board-container .status-preseting p:first-child {
  margin-top: 18%;
}
.dash-board-container .status-preseting span {
  font-size: 0.3rem;
}
.remainderText {
  display: inline-block;
  margin: 0;
  padding: 0;
}
@media screen and (max-device-height: 567px) {
  .dash-board-container .status-preseting p:first-child {
    margin-top: 13%;
  }
  .dash-board-container .status-preseting .line {
    height: 0.6rem;
    margin-top: 9%;
  }
}
@media screen and (min-width: 375px) and (max-width: 413px) and (min-device-height: 736px) {
  /* 兼容iponeX */
  .dash-board-container {
    height: 33%;
  }
  .dash-board-container .status-cooking p {
    font-size: 0.2rem;
  }
  .dash-board-container .status-cooking span {
    font-size: 0.4rem;
  }
  .dash-board-container .status-preseting p:first-child {
    margin-top: 26%;
  }
  .dash-board-container .status-preseting .line {
    margin-top: 17%;
  }
}
@media screen and (min-width: 500px) {
  /* 兼容ipad */
  .dash-board-container .status-cooking p:first-child {
    margin-top: 3%;
  }
  .dash-board-container .status-preseting p:first-child {
    margin-top: 5%;
  }
  .dash-board-container .status-preseting p:last-child {
    margin-top: 4%;
  }
  .dash-board-container .status-preseting .line {
    height: 0.6rem;
    margin-top: 5%;
  }
}
.dash-board-container .hide {
  display: none;
}
.dash-board-container .hidden {
  display: none;
}
</style>
