<template>
  <div class="wrapper">
    <video
      ref="videojsPlayer"
      webkit-playsinline
      class="videojsPlayer video-js vjs-styles-defaults vjs-default-skin vjs-big-play-centered">
      <source src="https://smartsitblob01.blob.core.windows.net/smart-ilearning/MLA_Mandarin_7mb.mp4" />
    </video>
    <video
      ref="videoPlayer"
      controls
      class="videoPlayer">
      <source src="https://smartsitblob01.blob.core.windows.net/smart-ilearning/MLA_Mandarin_7mb.mp4" />
    </video>
    <button class="video-btn">点我试试</button>
    <button class="add">+5</button>
    <button class="fullscreen">全屏按钮</button>
  </div>
</template>
<script>
import videojs from 'video.js';

export default {
  data () {
    return {
      player: null,
      options: {
        autoplay: 'muted',
        controls: true,
        loop: false,
        controlBar: { playToggle: { replay: false }, progressControl: false }
      }
    }
  },
  mounted() {
    this.init();
    this.initLib();
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  },
  methods: {
    init() {
      console.log(navigator.userAgent)
      const videoEle = this.$refs.videoPlayer
      console.log(videoEle.volume)
      console.log(videoEle.currentTime)
      videoEle.addEventListener('play', () => {
        // videoEle.currentTime = 5.0
        console.log(videoEle.duration)
        if (videoEle.requestFullscreen) {
          // videoEle.requestFullscreen();
        }
      })
      videoEle.addEventListener('seeking', (e) => {
        console.log('seeking', e)
      })
      videoEle.addEventListener('seeked', (e) => {
        console.log('seeked', e)
        console.log(videoEle.currentTime)
        videoEle.play()
      })
      videoEle.addEventListener('pause', (e) => {
        console.log('pause', e)
        if (document.fullscreenElement) {
          document.exitFullscreen()
        }
      })
      videoEle.addEventListener('error', (e) => {
        console.error(e)
      })
      document.querySelector('.video-btn').addEventListener('click', () => {
        console.log('seeeeeeeeeeeeeeeeeeeeeeeeked')
        videoEle.currentTime = 20.0
        videoEle.play()
      })
      document.querySelector('.add').addEventListener('click', () => {
        console.log('add')
        videoEle.currentTime += 5.0
      })
      document.querySelector('.fullscreen').addEventListener('click', () => {
        console.log('fullscreen')
        if (document.fullscreenElement) {
          document.exitFullscreen()
        } else if (videoEle.requestFullscreen) {
          videoEle.requestFullscreen();
        }
      })
    },
    initLib () {
      this.player = videojs(this.$refs.videojsPlayer, {
        usingNativeControls_: true,
        controls: true, // 是否显示控制条
        loop: false, // 循环播放
        preload: 'auto',
        autoplay: false,
        fluid: true, // 自适应宽高
        muted: false, // 是否静音
        inactivityTimeout: false,
        controlBar: { // 设置控制条组件 /* 设置控制条里面组件的相关属性及显示与否 */
          currentTimeDisplay: true,
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          volumePanel: {
            inline: false
          }, /* 使用children的形式可以控制每一个控件的位置，以及显示与否 */
          children: [
            // {name: "PictureInPictureToggle"}, // 画中画模式
            { name: "Menu" },
            { name: "MenuButton" },
            { name: 'playToggle' }, // 播放按钮
            { name: 'currentTimeDisplay' }, // 当前已播放时间
            { name: 'progressControl' }, // 播放进度条
            { name: 'durationDisplay' }, // 总时间
            // { name: 'playbackRateMenuButton', playbackRates: [0.5, 1, 1.5, 2, 2.5] }, // 倍数播放
            {
              name: 'volumePanel', // 音量控制
              inline: false // 不使用水平方式
            },
            { name: 'FullscreenToggle' } // 全屏
          ]
        }
      }, function onPlayerReady (e) {
        console.log('onPlayerReady', this, e)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
}
.videoPlayer {
  z-index: 3;
  width: 100%;
  height: 285px;
}
</style>
