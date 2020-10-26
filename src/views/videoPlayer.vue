<template>
  <video-container :options="options"></video-container>
</template>

<script lang='ts'>
import { defineAsyncComponent, reactive, provide } from 'vue';
import {
  VideoOptions
} from '@/components/video.ts'

import {
  videoKey
} from '@/utils'

export default {
  components: {
    VideoContainer: defineAsyncComponent(() => import('../components/container.vue')),
  },
  setup() {
    const options: VideoOptions = reactive({
      source: 'https://www.google.com/earth/assets/static/videos/Earth_Studio_Mobile.mp4',
    })
    provide(videoKey, options)
    return {
      options
    }
  }
}
</script>
