<template>
  <div class="carousel">
    <div
      class="carousel-item-wrapper"
      ref="carouselWrapper"
      :style="setItemStyle()">
      <section
        class="carousel-item"
        :key="'section_' + index"
        :ref="`carouselItem_${index}`"
        v-for="(item, index) in dataConfig">
        <img :src="item.imgUrl" />
        <p>{{ item.title }}</p>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import { deepCopy } from '@/utils/tools'

@Component({
  name: 'Carousel'
})
export default class Carousel extends Vue {
  $refs!: {
    carouselWrapper: HTMLFormElement;
    carouselItem_0: HTMLFormElement;
  };

  @Prop({
    type: Boolean,
    default () {
      return false
    }
  })isInfinity?: boolean

  @Prop({
    type: Array,
    default () {
      return [
        {
          imgUrl: '',
          title: 'title1'
        },
        {
          imgUrl: '',
          title: 'title2'
        },
        {
          imgUrl: '',
          title: 'title3'
        },
        {
          imgUrl: '',
          title: 'title4'
        },
        {
          imgUrl: '',
          title: 'title5'
        },
        {
          imgUrl: '',
          title: 'title6'
        },
        {
          imgUrl: '',
          title: 'title7'
        }
      ]
    }
  })dataList?: object[]

  private directionLeft = true
  private carouselConfig = {
    wrapperWidth: 100, // 总长度
    initDis: 0, // 初始位移
    translateDis: 0, // 位移距离
    startPoint: [0, 0],
    movingPoint: [0, 0],
    endPoint: [0, 0]
  };

  private dataConfig: object[] = [];
  private itemWidth = 0; // 单个元素宽度

  private wrapperOffset = 0;

  @Watch('dataList')
  onChangeDataList (newVal: object[]) {
    console.log(newVal)
  }

  @Watch('wrapperOffset')
  onChangeWrapperOffset (newVal: number) {
    console.log('wrapperOffset', newVal)
  }

  private setItemStyle (): string {
    return `transform: translateX(${this.carouselConfig.translateDis}px)`
  }

  private mounted (): void {
    const wrapper = this.$refs.carouselWrapper
    wrapper.addEventListener('touchstart', this.changeStart, {
      passive: false,
      capture: false
    })
    this.initCarousel()
  }

  private initCarousel (): void {
    const initArray = deepCopy(this.dataList)
    const dataConfigLength = initArray.length * 3
    for (let i = 0; i < dataConfigLength; i++) {
      this.dataConfig.push({
        id: i,
        imgUrl: initArray[i % initArray.length].imgUrl,
        title: initArray[i % initArray.length].title
      })
    }
    this.$nextTick(() => {
      this.itemWidth = this.$refs.carouselItem_0[0].clientWidth
      // 设计稿间距为10
      this.wrapperOffset = this.itemWidth * initArray.length + (initArray.length - 1) * 10
      this.carouselConfig.initDis = -this.wrapperOffset
      this.carouselConfig.translateDis = -this.wrapperOffset
    })
  }

  private changeStart (event: TouchEvent): void {
    const myEvent = event || window.event
    myEvent.preventDefault()
    const selfPickerWrapper = this.$refs.carouselWrapper
    this.carouselConfig.startPoint = [
      myEvent.targetTouches[0].pageX,
      myEvent.targetTouches[0].pageY
    ]
    selfPickerWrapper.addEventListener('touchmove', this.changeMoving, {
      passive: false,
      capture: false
    });
    (selfPickerWrapper as HTMLElement).addEventListener('touchend', this.changeEnd, {
      passive: false,
      capture: false
    })
  }

  private changeMoving (event: TouchEvent): void {
    const myEvent = event || window.event
    myEvent.preventDefault()
    this.carouselConfig.movingPoint = [
      myEvent.targetTouches[0].pageX,
      myEvent.targetTouches[0].pageY
    ]
    const dis = this.carouselConfig.movingPoint[0] - this.carouselConfig.startPoint[0]
    this.carouselConfig.translateDis = this.carouselConfig.initDis + dis
  }

  private changeEnd (event: TouchEvent): void {
    const myEvent = event || window.event
    this.carouselConfig.endPoint = [
      myEvent.changedTouches[0].pageX,
      myEvent.changedTouches[0].pageY
    ]
    this.carouselConfig.translateDis =
    this.carouselConfig.translateDis % this.wrapperOffset - this.wrapperOffset
    this.carouselConfig.initDis = this.carouselConfig.translateDis
  }

  private beforeDestroy (): void {
    const wrapper = this.$refs.carouselWrapper
    wrapper.removeEventListener('touchstart', this.changeStart)
    wrapper.removeEventListener('touchmove', this.changeMoving)
    wrapper.removeEventListener('touchend', this.changeEnd)
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  overflow: hidden;
  text-align: center;
  user-select: none;
}
.carousel-item-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  // overflow-x: hidden;
  // overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}
.carousel-item ~ .carousel-item {
  margin-left: 10px;
}
::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
  background-color: rgba(0, 0, 0, 0);
}
::-webkit-scrollbar-track-piece {
  background-color: rgba(0, 0, 0, 0);
}
::-webkit-scrollbar-thumb {
  width: 0;
  height: 0;
  background-color: rgba(0, 0, 0, 0);
}
</style>
