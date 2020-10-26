import { computed } from 'vue'

import { ref, Ref } from 'vue'

import { debounce } from '@/utils'

export const useVideo = (props, ctx) => {
    const status = ref('')
    const videoRef: Ref<any> = ref(null)

    // pc全屏
    const full = () => {
      if (videoRef.value.requestFullscreen) {
        videoRef.value.requestFullscreen()
      } else if (videoRef.value.mozRequestFullScreen) {
        videoRef.value.mozRequestFullScreen()
      } else if (videoRef.value.webkitRequestFullScreen) {
        videoRef.value.webkitRequestFullScreen()
      }
      status.value = 'full'
    }
    const exitFull = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen()
      } else if ((document as any).webkitCancelFullScreen) {
        (document as any).webkitCancelFullScreen()
      }
      status.value = ''
    }

    const fullOrExitFull = debounce(() => {
      if (status.value === 'full') {
        exitFull()
      } else {
        full()
      }
    }, 300)


    const play = () => {
      console.log('2')
    }
    return {
      status,
      videoRef,


      fullOrExitFull,
      play
    }
}