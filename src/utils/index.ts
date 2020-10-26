import { computed } from 'vue'

const _toString = Object.prototype.toString

export const isObject = (o: unknown) => _toString.call(o).slice(8, -1).toLowerCase() === 'object'

export const isArray = Array.isArray

export const isString = (val: unknown) => typeof val === "string"

export const videoKey = Symbol('video')

type callback = (e?: Event) => void

export const throttle = (fn: callback, timestamp: number): callback => {
  let _oldTime = 0
  return (e?: Event) => {
    const _nowTime = new Date().getTime()
    if (_nowTime - _oldTime >= timestamp || _oldTime === 0) {
      e ? fn(e) : fn()
      _oldTime = _nowTime
    }
  }
}

export const debounce = (fn: callback, timestamp: number) => {
  let timer
  return (e?: Event) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      e ? fn(e) : fn()
    }, timestamp)
  }
}

export const isMobile = computed(() => /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent))