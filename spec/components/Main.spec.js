import { mount } from '@vue/test-utils'
import Main from '../../src/components/Main.vue'

describe('Main', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Main, {})
  })

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
