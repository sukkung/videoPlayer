<template>
  <video>
    <source :src="options">
  </video>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
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