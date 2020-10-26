<template>
  <div class="video-player" :style="{ width: `${isMobile ? '100%' : options.style?.width || 960}px` }" ref="videoRef">
    <!-- <video :width="options.style && options.style.width || '960'" class="video-el"> -->
    <video class="video-el" webkit-playsinline='true' playsinline='true' x-webkit-airplay='true' x5-video-player-type='h5' x5-video-player-fullscreen='true' x5-video-ignore-metadata='true'>
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

import { defineComponent, defineAsyncComponent, ref, onMounted, onBeforeUnmount } from 'vue';

import { on, off } from '@/utils/dom'
import { isMobile } from '@/utils'
import { useVideo } from './useVideo';

export default defineComponent({
  components: {
    videoPanel: defineAsyncComponent(() => import('../components/panel/src/panel.vue'))
  },
  props: {
    options: Object,
  },
  setup(props, ctx) {
    console.log('component haha: ', props.options)

    const {
      status,
      videoRef,

      fullOrExitFull,
      play,
    } = useVideo(props, ctx)

    onMounted(() => {
      console.log('dom')
      // on(videoRef.value, 'canplaythrough', play) // 当浏览器预计能够在不停下来进行缓冲的情况下持续播放指定的音频/视频时，会发生 canplaythrough 事件。
      if (!isMobile.value) {
        on(videoRef.value, 'dblclick', fullOrExitFull)
      }
    })

    onBeforeUnmount(() => {
      if (!isMobile.value) {
        on(videoRef.value, 'dblclick', fullOrExitFull)
      }
    })
    return {
      videoRef,
      status,
      isMobile
    }
  }
})
</script>