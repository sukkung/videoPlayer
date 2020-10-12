<template>
  <div class="video-panel">
    <div class="video-panel__title">

    </div>
    <div class="video-panel__bottom">
      <!-- paly pause next timer -->
      <div class="video-panel__bottom--left"></div>
      <!-- bullet screen -->
      <div class="video-panel__bottom--mid"></div>
      <!-- speed resolution -->
      <div class="video-panel__bottom--resource">
        <video-control></video-control>
      </div>
      <video-process></video-process>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue'
export default defineComponent({
  components: {
    VideoControl: defineAsyncComponent(() => import('@/components/control/src/control.vue')),
    VideoProcess: defineAsyncComponent(() => import('@/components/process/src/process.vue'))
  },
  data(){
    return{
      playBtn: require('@/assets/img/play.png'),
    }
  }
})
</script>

<style lang="scss">
.video-panel__bottom{
  // color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  .play-btn{
    img{
      width: 15px;
    }
  }
}
</style>