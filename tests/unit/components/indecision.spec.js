import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/indecision'

describe('Indecision Component', () => {
    let wrapper 
    let consolelogSpy

    beforeEach(() => {
        wrapper = shallowMount (Indecision)

        consolelogSpy = jest.spyOn(console, 'log')
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

    test('write symbol "?" should trigger the fetch', () => {

    })

    test('testing getAnswer', () => {

    })

    test('testing getAnswer - API bug ', () => {

    })
})