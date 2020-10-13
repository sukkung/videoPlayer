<template>
  <div class="video-panel">
    <div class="video-panel__title">

    </div>
    <div class="video-panel__bottom">
      <video-control type="play"></video-control>
      <video-control type="full"></video-control>
      <video-control type="next"></video-control>
    </div>
    <video-process></video-process>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
export default defineComponent({
  components: {
    VideoControl: defineAsyncComponent(() => import('@/components/control/src/control.vue')),
    VideoProcess: defineAsyncComponent(() => import('@/components/process/src/process.vue'))
  },
  setup(props, ctx) {
    return {}
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