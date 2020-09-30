<template>
  <div class="video-player" :style="{ width: `${options.style && options.style.width || 960}px` }">
    <video :width="options.style && options.style.width || '960'" class="video-el">
      <source :src="options.source">
    </video>
    <!-- 全局遮罩层 -->
    <video-panel class="video-panel"></video-panel>
    <!-- mobile全屏右侧操作板 -->
    <!-- pc右侧videolist/mobile全屏视频播放完底部会出现/mobile非全屏底部会出现 -->
    <template v-if="options.videoList" class=""></template>
  </div>
</template>

<script lang='ts'>

import { defineComponent, defineAsyncComponent } from 'vue';
export default defineComponent({
  components: {
    videoPanel: defineAsyncComponent(() => import('../components/panel.vue'))
  },
  props: {
    options: Object,
  },
  setup(props) {
    console.log('component haha: ', props.options)
  }
})
</script>

<style>

</style>