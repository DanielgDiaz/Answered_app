import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/indecision'

describe('Indecision Component', () => {
    let wrapper 
    let consolelogSpy

    beforeEach(() => {
        wrapper = shallowMount (Indecision)

        consolelogSpy = jest.spyOn(console, 'log')

        jest.clearAllMocks()
    })

    test('should match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('writing to input should not trigger anything (console.log)', async() => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola')

        expect (consolelogSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalledTimes(0)

    })

    test('write symbol "?" should trigger the getAnswer', async() => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('?')

        expect (consolelogSpy).toHaveBeenCalledTimes(2)
        expect(getAnswerSpy).toHaveBeenCalledTimes(1)

    })

    test('testing getAnswer', () => {

    })

    test('testing getAnswer - API bug ', () => {

    })
})