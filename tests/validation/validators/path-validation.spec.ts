import { PathFileValidation } from '@/validation/validators'
import fs from 'fs'

const makeSut = (): PathFileValidation => {
    return new PathFileValidation()
}

jest.mock('fs', () => ({
    existsSync (): boolean {
        return true
    }
}))


describe('PathFileValidation', () => {
    test('Should return false if path does not exist', () => {
        const sut = makeSut()
        jest.spyOn(fs, 'existsSync').mockReturnValueOnce(false)
        const error = sut.validate('test')
        expect(error).toEqual(new Error('File not found'))
    })
})
