// type Style<T> = {[key in keyof T]? : T[key]}
type Style = Partial<CSSStyleDeclaration>
// type test = Style<CSSStyleDeclaration>

// const style: Style = {
//   height: '20px'
// }

export interface VideoOptions {
  source: string
  title?: string
  style?: Style
  // style?: CSSStyleDeclaration,
  controlList?: Control[] // 做到写
  videoList?: Video[]
  process?: ProcessOptions
}
export interface ProcessOptions {
  current: string | number
  percent: string | number
  icon?: string // 进度条圈圈替代
  pointList?: Point[] // 事件点
  style?: Style // 进度条样式
}
interface Video {
  options: VideoOptions
  position?: string // 在哪里出现这个列表
}
interface Point {
  time: string | Date | number
  label: string
  image: string
}

export interface Control {
  type: string // 操作类型
}