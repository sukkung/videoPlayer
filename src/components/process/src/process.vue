<template>
  <div class="video-process" >
    <div class="video-process__runway" ref="runway" @click="changeProgress"></div>
    <div class="video-process__progress" @click="changeProgress" :style="{'border-top-color': processColor, width: progress + '%'}"></div>
    <div class="video-process__thumb" :style="{ left: progress + '%' }" ref="thumb"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed, onBeforeUnmount} from 'vue';

import { on, off } from '@/utils/dom'

export default defineComponent({
    name: 'videoProcess',
    props: {
      processColor: {
        type: String,
        default: '#727a3a'
      }
    },
    emits: ['change'],
    setup(props, ctx){
      const thumb: any = ref(null)
      const runway: any = ref(null)
      const progress = ref(20) // 进度条百分数
      const isMobile = computed(() => /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent))
      let runWidth: number // 进度条宽度
      let left: number // 进度条开始坐标
      let right: number // 进度条结束坐标
      let lock = false
     
      const getPageX = (event: TouchEvent | MouseEvent | Event) => {
        return isMobile.value ? (event as TouchEvent).touches[0].pageX : (event as MouseEvent).offsetX
      }
      function onDragStart(){
      }
      const onDragging = (event: TouchEvent | MouseEvent | Event) => {
        if(lock) return
        const currentX = getPageX(event)
        if(currentX <= left ){
          progress.value = 0
        }else if(currentX >= right){
          progress.value = 100
        }else{
          progress.value = (currentX - left) / runWidth * 100
        }
      }
      const onDragEnd = () => {
        ctx.emit('change', progress.value)
      }
      // 点击进度条跳转
      const changeProgress = (event: MouseEvent) => {
        lock = true
        const currentX = event.offsetX
        progress.value = currentX / runWidth * 100
      }
      onMounted(() => {
        if(isMobile.value){
          on(thumb.value, 'mousedown', onDragStart)   
          on(thumb.value, 'mousemove', onDragging)   
          on(thumb.value, 'mouseup', onDragEnd)       
        }else{
          on(thumb.value, 'mousedown', onDragStart)   
          on(thumb.value, 'mousemove', onDragging)   
          on(thumb.value, 'mouseup', onDragEnd)   
        }

        runWidth = runway.value.clientWidth
        left = runway.value.getBoundingClientRect().left
        right = runway.value.getBoundingClientRect().right
      })

      onBeforeUnmount(() => {
        off(thumb.value, 'mousedown', onDragStart)   
        off(thumb.value, 'mousemove', onDragging)   
        off(thumb.value, 'mouseup', onDragEnd)       
      })
      return{
        progress,
        thumb,
        runway,
        changeProgress,
        onDragging,
        onDragEnd
      }
    },
})
</script>

<style>

</style>