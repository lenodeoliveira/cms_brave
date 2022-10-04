import { FileValidation } from '@/validation/validators'
import { InvalidParamError } from '@/presentation/errors'

const makeSut = (): FileValidation => {
    return new FileValidation()
}

describe('CompareFieldsValidation', () => {
    test('Should return an error if size validation fails', () => {
        const sut = makeSut()
        const error = sut.validate({
            size: 89 * 1024 * 1024,
            mimetype: 'image/jpeg'
        })
        expect(error).toEqual(new Error('Invalid size'))
    })
    test('Should return an error if image type validation fails', () => {
        const sut = makeSut()
        const error = sut.validate({
            size: 121234,
            mimetype: 'image/gif'
        })
        expect(error).toEqual(new Error('Invalid type'))
    })
})
