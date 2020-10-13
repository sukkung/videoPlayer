import { mount } from '@vue/test-utils'

import VideoControl from '../src/control.vue'

describe('control test', () => {
  const warpper = mount(VideoControl)
  it("created", async () => {
    await warpper.setProps({ type: 'full ' })
    expect(warpper.find('i').element.classList).toContain('v-icon-full')
  })
  it("action", async () => {
    // const warpper = mount(VideoControl)
    // await warpper.trigger('click')
    // expect(warpper.emitted()).toBeTruthy()
  })
})