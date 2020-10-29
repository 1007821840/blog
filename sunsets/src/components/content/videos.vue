<template>
    <div class="player-container">
    <video-player class="vjs-custom-skin" :options="playerOptions"></video-player>
    <h1 class="display-3">Hello, Sunset!</h1>
    </div>
</template>
<script>
 //引入video样式
 import 'video.js/dist/video-js.css'
 import 'vue-video-player/src/custom-theme.css'
  //引入hls.js
// import 'videojs-contrib-hls.js/src/videojs.hlsjs'

  export default {
    data () {
      return {
        playerOptions: {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: true, //如果true,浏览器准备好时开始回放。
          controls: false, //控制条
          preload: 'auto', //视频预加载
          muted: true, //默认情况下将会消除任何音频。
          loop: true, //导致视频一结束就重新开始。
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: 'video/mp4',
            src: 'https://img-baofun.zhhainiao.com/pcwallpaper_ugc/preview/ccb89842e4d47419d7339c665f7eb376_preview.mp4'
          }],
        //   poster: "@/static/img/head.jpg", //你的封面地址（覆盖在视频上面的图片）
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        }
      }
    }
  }
</script>
<style scoped>
    .display-3{
        font-size: 3rem;
        position: absolute;
        top: 20px;
        left: 20px;
    }
</style>