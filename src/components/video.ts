export interface VideoOptions {
  source: string
  title?: string
  style?: HTMLStyleElement
  controlList?: Control[] // 做到写
  videoList?: Video[]
  process?: ProcessOptions
}
export interface ProcessOptions {
  current: string | number
  percent: string | number
  icon?: string // 进度条圈圈替代
  style?: HTMLStyleElement // 进度条样式
}
interface Video {
  options: VideoOptions
  position?: string // 在哪里出现这个列表
}

export interface Control {
  type: string // 操作类型
}