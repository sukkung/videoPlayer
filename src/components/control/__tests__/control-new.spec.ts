import { mount } from '@vue/test-utils'

import VideoControl from '../src/control.vue'

describe('control test', () => {
  it('created', () => {
    const warpper = mount(VideoControl, {})
    expect(warpper.findAll('i').length).toBe(3)
  })
})