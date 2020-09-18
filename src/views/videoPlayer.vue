<template>
  <div class="video-player">
    <video-container :options='options'></video-container>
  </div>
</template>

<script>
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
import { defineAsyncComponent, reactive } from 'vue'
export default {
  components: {
    VideoContainer: defineAsyncComponent(() => import('../components/container.vue'))
  },
  setup() {
    const options = reactive({
      source: 'sdaksndjkh'
    })
    return {
      options
    }
  }
}
</script>

<style>

</style>