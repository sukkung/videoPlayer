<template><!-- 控件 -->
  <div class="video-menu--control">
    <i class="v-icon v-icon-play"></i>
    <i class="v-icon v-icon-pause"></i>
    <i class="v-icon v-icon-next"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
// inject('video')
export default defineComponent({
  name: 'VideoControl',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
})
</script>

<style>

</style>