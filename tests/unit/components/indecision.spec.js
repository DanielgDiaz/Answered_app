import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/indecision'

describe('Indecision Component', () => {
    let wrapper 
    beforeEach(() => {
        wrapper = shallowMount (Indecision)
    })

    test('should match snapshot', () => {
        expect(wrapper.html()).toMatchInlineSnapshot()
    })
})