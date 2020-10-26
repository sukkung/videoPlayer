<template><!-- 控件 -->
  <div :class="['video-menu--control flex-center cursor', { 'color-white': isDev }]" :style="defaultPluginStyle || style">
    <i :class="[
      'v-icon',
      `v-icon-${type}`
    ]"
    @click="handleClick"
    ></i> {{ type[0].toUpperCase() }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { isDev } from '@/utils/config'

interface ControlProps {
  type: string
  style?: CSSStyleDeclaration
}
export default defineComponent({
  name: 'VideoControl',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    style: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['click'],
  setup(props, ctx) {
    const handleClick = (evt: Event) => {
      // if (props.type === 'full') {}
      ctx.emit('click', evt, props.type)
    }
    const defaultPluginStyle = computed(() => {
      switch(props.type) {
        case 'play':
        case 'pause':
          return { left: '40px' }
        case 'next':
          return { left: '80px' }
        case 'full':
        case 'mini': 
          return { right: '40px' }
        default:
          return {}
      }
    })
    return {
      handleClick,
      defaultPluginStyle,
      isDev
    }
  }
})
</script>
