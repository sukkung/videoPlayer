<template>
  <div class="video-process">
    <div class="video-process__runway"></div>
    <div class="video-process__progress" :style="{'border-top-color': processColor, width: progress + '%'}"></div>
    <div class="video-process__thumb" :style="{ left: progress + '%' }" ref="thumb"></div>
    <h1>{{isMobile}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, getCurrentInstance } from 'vue';

export default defineComponent({
    name: 'videoProcess',
    props: {
      processColor: {
        type: String,
        default: '#727a3a'
      }
    },
    setup(props, ctx){
      const progress = computed(() => {
        return 20
      })
      const isMobile = computed(() => /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent))
      const instance = getCurrentInstance()
      // const thumb = instance.refs.thumb
      return{
        progress,
        isMobile,
        instance,
      }
    },
})
</script>

<style>

</style>