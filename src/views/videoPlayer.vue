<template>
  <video-container :options="options"></video-container>
</template>

<script lang='ts'>
/* 
  https://github.com/vuejs/rfcs/blob/master/active-rfcs/0026-async-component-api.md

  const AsyncFoo = defineAsyncComponent(() => import("./Foo.vue"))
  // with options
  const AsyncFooWithOptions = defineAsyncComponent({
    loader: () => import("./Foo.vue"),
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    delay: 200,
    timeout: 3000
  })
*/
import { defineAsyncComponent, reactive } from 'vue';
import {
  VideoOptions
} from '@/components/video.ts'

export default {
  components: {
    VideoContainer: defineAsyncComponent(() => import('../components/container.vue')),
  },
  setup() {
    const options: VideoOptions = reactive({
      source: 'https://www.google.com/earth/assets/static/videos/Earth_Studio_Mobile.mp4',
    })
    return {
      options
    }
  }
}
</script>
