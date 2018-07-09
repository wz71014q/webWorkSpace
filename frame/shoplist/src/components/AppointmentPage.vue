<template>
<!-- 时间设置页 -->
<div class='aptHolder'>
    <div class='timeHolder'>
        <div class="recover">
            <p>timePicker</p>
            <p id="recover" @click="recoverTime">recover</p>
        </div>
        <mt-picker ref="picker" :slots="timeRange" @change="onValuesChange"></mt-picker>
    </div>
</div>
</template>
<script>
/* 定时模块 */
var miniteAll = []
var miniteHalfStart = []
var miniteHalfEnd = []
var miniteTwenty = []
for (var i = 0; i < 60; i++) {
  if (i < 10) {
    miniteAll.push('0' + i)
    continue
  }
  miniteAll.push(i)
}
for (var k = 0; k < 31; k++) {
  if (k < 10) {
    miniteHalfStart.push('0' + k)
    continue
  }
  miniteHalfStart.push(k)
}
for (var j = 30; j < 60; j++) {
  if (j < 10) {
    miniteHalfEnd.push('0' + j)
    continue
  }
  miniteHalfEnd.push(j)
}
for (var m = 10; m < 31; m++) {
  if (m < 10) {
    miniteTwenty.push('0' + m)
    continue
  }
  miniteTwenty.push(m)
}
export default {
  name: 'AppointmentPage',
  data () {
    return {
      timeRange: [
        {
          flex: '40%',
          values: ['00', '01'],
          className: 'slot1',
          textAlign: 'center'
        }, {
          flex: '10%',
          divider: true,
          content: 'H',
          className: 'slot2'
        }, {
          flex: '40%',
          values: miniteAll,
          className: 'slot3',
          textAlign: 'center'
        }, {
          flex: '10%',
          divider: true,
          content: 'M',
          className: 'slot4',
          textAlign: 'left'
        }
      ]
    }
  },
  computed: {
  },
  mounted () {
    /* 初始化定时滑轮的范围和默认值 */
    var selfPicker = this.$refs.picker
    var modeNow = this.$store.getters.getDeviceStatus.modeIndex
    switch (modeNow) {
      case 3:
        selfPicker.setSlotValues(0, ['01', '02'])
        selfPicker.setSlotValues(1, miniteHalfStart)
        selfPicker.setSlotValue(0, '02')
        selfPicker.setSlotValue(1, '00')
        break
      case 4:
        selfPicker.setSlotValues(0, ['01', '02'])
        selfPicker.setSlotValues(1, miniteHalfEnd)
        selfPicker.setSlotValue(0, '01')
        selfPicker.setSlotValue(1, 30)
        break
      case 6:
        selfPicker.setSlotValues(0, ['01'])
        selfPicker.setSlotValues(1, miniteHalfStart)
        selfPicker.setSlotValue(0, '01')
        break
      case 7:
        selfPicker.setSlotValues(0, ['01', '02', '03'])
        selfPicker.setSlotValues(1, miniteHalfEnd)
        selfPicker.setSlotValue(0, '01')
        selfPicker.setSlotValue(1, 30)
        break
      case 8:
        selfPicker.setSlotValues(0, ['00'])
        selfPicker.setSlotValues(1, miniteTwenty)
        selfPicker.setSlotValue(1, 30)
        break
    }
  },
  methods: {
    onValuesChange (picker, values) {
      /**
       * @function onValuesChange - 根据模式改变定时范围和默认值
       * @memberof AppointmentPage
       * @property {object} picker - 调用mintUI的picker组件
       * @property {function} picker.setSlotValues - 设置当前的数组范围
       * @property {function} picker.setSlotValue - 设置当前的时间
       * @param {object[]} values - 当前选择时间组成的数组
       */
      var selectHour = values[0]
      var selectMin = values[1]
      var modeNow = this.$store.getters.getDeviceStatus.modeIndex
      switch (modeNow) {
        case 3:
          if (selectHour === '01') {
            if (!this.$store.getters.getDeviceStatus.oddFlag) {
              picker.setSlotValues(1, miniteHalfEnd)
              picker.setSlotValue(1, 31)
            }
            this.$store.commit('updateOddFlag', true)
          } else if (this.$store.getters.getDeviceStatus.oddFlag && (selectHour === '02')) {
            picker.setSlotValues(1, miniteHalfStart)
            picker.setSlotValue(1, '00')
            this.$store.commit('updateOddFlag', false)
          }
          break
        case 4:
          if (selectHour === '01') {
            picker.setSlotValues(1, miniteHalfEnd)
          } else if (selectHour === '02') {
            picker.setSlotValues(1, ['00'])
          }
          break
        case 7:
          if (selectHour === '01') {
            if (!this.$store.getters.getDeviceStatus.strangeFlag) {
              picker.setSlotValues(1, miniteHalfEnd)
              picker.setSlotValue(1, 30)
            } else {
              picker.setSlotValues(1, miniteHalfEnd)
            }
            this.$store.commit('updateStrangeFlag', true)
          } else if (this.$store.getters.getDeviceStatus.strangeFlag && (selectHour === '02')) {
            /* There is a strange problem here */
            picker.setSlotValues(1, miniteAll)
            picker.setSlotValue(1, '00')
            this.$store.commit('updateStrangeFlag', false)
          } else if (selectHour === '03') {
            picker.setSlotValues(1, ['00'])
          }
          break
      }
      console.log('已选择小时：' + parseInt(selectHour) + ',' + '已选择分钟：' + parseInt(selectMin))
      this.$store.commit('updateTimer', {timerHour: parseInt(selectHour), timerMin: parseInt(selectMin)})
    },
    recoverTime () {
      /* 恢复默认 */
      var selfPicker = this.$refs.picker
      var modeNow = this.$store.getters.getDeviceStatus.modeIndex
      switch (modeNow) {
        case 3:
          selfPicker.setSlotValues(0, ['01', '02'])
          selfPicker.setSlotValues(1, miniteHalfStart)
          selfPicker.setSlotValue(0, '02')
          selfPicker.setSlotValue(1, '00')
          break
        case 4:
          selfPicker.setSlotValues(0, ['01', '02'])
          selfPicker.setSlotValues(1, miniteHalfEnd)
          selfPicker.setSlotValue(0, '01')
          selfPicker.setSlotValue(1, 30)
          break
        case 6:
          selfPicker.setSlotValue(0, '01')
          selfPicker.setSlotValue(1, '00')
          break
        case 7:
          selfPicker.setSlotValues(0, ['01', '02', '03'])
          selfPicker.setSlotValues(1, miniteHalfEnd)
          selfPicker.setSlotValue(0, '01')
          selfPicker.setSlotValue(1, 30)
          break
        case 8:
          selfPicker.setSlotValues(0, ['00'])
          selfPicker.setSlotValues(1, miniteTwenty)
          selfPicker.setSlotValue(1, 30)
          break
      }
    }
  }
}
</script>
<style scoped>
.aptHolder{
    width: 100%;
    height: 86%;
}
/* 时间滚轮*/
.timeHolder{
    width: 98%;
    height: 50%;
    margin: 0 1%;
    background-color: #ffffff;
}
.timeHolder .recover{
    width: 96%;
    height: 20%;
    margin-left: 3%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
}
.timeHolder .recover p{
    flex-basis: 29%;
    margin: 0;
    font-size: 0.23rem;
    color: #333333;
}
.timeHolder .recover p:last-child{
    font-size: 0.18rem;
    color: #999999;
}
@media screen and (min-device-height:481px) and (max-device-height:520px){
.timeHolder p{
    line-height: 0.6rem;
}
}
@media screen and (min-device-height:737px) and (max-device-height:812px){
    /* 兼容iponeX */
.timeHolder{
    height: 40%;
}
.timeHolder p{
    line-height: 0.8rem;
}
}
@media screen and (min-width: 420px) {
    /* 兼容ipad */
.timeHolder p{
    line-height: 0.5rem;
}
}
</style>
<style>
/* picker style */
.timeHolder .recover~div{
    border-top:1px solid #ccc;
}
.picker{
  height: 80%;
}
.picker .picker-items{
  padding:3%;
}
.picker-selected{
  font-size: 0.3rem;
}
.slot1{
  margin-left: 15%;
}
.slot4{
  padding-right: 18%;
}
.picker-center-highlight{
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #ccc;
}
@media screen and (max-device-height: 567px) {
.aptHolder .timeHolder{
    height: 53%;
}
.picker .picker-items{
  padding:0;
}
}
</style>
