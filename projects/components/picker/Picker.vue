<template>
  <div class="picker">
    <div class="picker-item-wrapper" :style="wrapperStyle" ref="pickerWrapper">
      <section
        class="picker-item"
        :key="'section_' + index"
        :ref="`pickerItem_${index}`"
        v-for="(item, index) in dataList"
        :style="setItemStyle(index, dataList.length)">
        {{ item.content }}
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Picker'
})
export default class Picker extends Vue {
  $refs!: {
    pickerWrapper: HTMLFormElement;
  };

  private middleTime = 0;
  private acceleration = 0;
  private coefficient = 1000;

  private directionTop = true

  private swiper = {
    radio: 100, // 半径
    initDeg: 0, // 初始角度
    rotationAmount: 0, // 旋转角度
    startPoint: [0, 0],
    movingPoint: [0, 0],
    endPoint: [0, 0]
  };

  private dataList: object[] = [
    {
      content: '1',
      align: 'center'
    },
    {
      content: '2',
      align: 'center'
    },
    {
      content: '3',
      align: 'center'
    },
    {
      content: '4',
      align: 'center'
    },
    {
      content: '5',
      align: 'center'
    },
    {
      content: '6',
      align: 'center'
    },
    {
      content: '7',
      align: 'center'
    }
  ];

  get wrapperStyle (): string {
    return `transform: rotateX(${this.swiper.rotationAmount}deg)`
  }

  private mounted (): void {
    const selfPickerWrapper = this.$refs.pickerWrapper
    selfPickerWrapper.addEventListener('touchstart', this.swiperStart, {
      passive: false,
      capture: false
    })
  }

  private setItemStyle (index: number, length: number): string {
    return `transform: rotateX(${(360 / length) * index}deg) translateZ(${this.swiper.radio}px)`
  }

  private swiperStart (event: TouchEvent): void {
    const myEvent = event || window.event
    myEvent.preventDefault()
    this.middleTime = +new Date()
    const selfPickerWrapper = this.$refs.pickerWrapper
    this.swiper.startPoint = [
      myEvent.targetTouches[0].pageX,
      myEvent.targetTouches[0].pageY
    ]
    selfPickerWrapper.addEventListener('touchmove', this.swiperMoving, {
      passive: false,
      capture: false
    });
    (selfPickerWrapper as HTMLElement).addEventListener('touchend', this.swiperEnd, {
      passive: false,
      capture: false
    })
  }

  private swiperMoving (event: TouchEvent): void {
    const myEvent = event || window.event
    myEvent.preventDefault()
    this.swiper.movingPoint = [
      myEvent.targetTouches[0].pageX,
      myEvent.targetTouches[0].pageY
    ]
    this.directionTop = (myEvent.targetTouches[0].pageY) < this.swiper.startPoint[1]
    // eslint-disable-next-line
    const rotateDeg = Picker.getRotation(this.swiper.startPoint[1], this.swiper.movingPoint[1], this.swiper.radio)
    // eslint-disable-next-line
    this.swiper.rotationAmount = this.directionTop ? this.swiper.initDeg + rotateDeg : this.swiper.initDeg - rotateDeg
  }

  private swiperEnd (event: TouchEvent): void {
    const myEvent = event || window.event
    this.swiper.endPoint = [
      myEvent.changedTouches[0].pageX,
      myEvent.changedTouches[0].pageY
    ]
    this.swiper.initDeg = this.swiper.rotationAmount
    const dis = myEvent.changedTouches[0].pageY - this.swiper.startPoint[1]
    this.middleTime = (+new Date() - this.middleTime) / 1000
    // eslint-disable-next-line
    this.acceleration = Math.abs(Math.round(2 * dis / (this.middleTime * this.middleTime * this.coefficient)))
    clearInterval()
    const timer = setInterval(() => {
      if (this.acceleration <= 0) {
        this.swiper.initDeg = this.swiper.rotationAmount
        clearInterval(timer)
        return
      }
      this.swiper.rotationAmount = dis > 0
        ? this.swiper.rotationAmount + 30 : this.swiper.rotationAmount - 30
      this.acceleration--
    }, 30)
  }

  private static getRotation (start: number, end: number, radio: number): number {
    const distance = Math.abs(end - start)
    return Math.round((distance / (2 * Math.PI * radio)) * 360)
  }
}
</script>

<style lang="scss" scoped>
.picker {
  text-align: center;
  user-select: none;
}
.change {
  display: inline-block;
  width: 50px;
  height: 45px;
  margin: 0 auto;
  margin-top: 100px;
  background: #ccc;
}
.change:active {
  background-color: aqua;
  cursor: pointer;
}
.picker-item-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 100px;
  transform-style: preserve-3d;
  perspective-origin: 150% 150%;
}
.picker-item {
  position: absolute;
  top: 80px;
  width: 60px;
  height: 40px;
  margin: 0 auto;
  background-color: aliceblue;
  backface-visibility: hidden;
  transition: all 1s ease;
}
.picker-item:first-child {
  z-index: 1;
}
</style>
