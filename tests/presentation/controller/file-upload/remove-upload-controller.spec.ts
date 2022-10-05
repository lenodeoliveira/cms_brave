import { badRequest, noContent, serverError } from '@/presentation/helpers/http/http-helpers'
import { RemoveFileUploadControler } from '@/presentation/controller/file-upload/remove-upload-controller'
import { ValidationSpy } from '../../mocks/mock-validation'
import { RemoveFileSpy } from '../../mocks/mock-files'
import { throwError } from '@/../tests/domain/test-helpers'

const makeFakeHttpRequest = (): RemoveFileUploadControler.Result =>({
    image: 'any_image',
    userId: 'any_Id'
})

type SutTypes = {
  sut: RemoveFileUploadControler
  validationSpy: ValidationSpy
  removeFileSpy: RemoveFileSpy
}

const makeSut = (): SutTypes => {
    const validationSpy = new ValidationSpy()
    const removeFileSpy = new RemoveFileSpy()
    const sut = new RemoveFileUploadControler(removeFileSpy, validationSpy)

    return {
        sut,
        validationSpy,
        removeFileSpy
    }
}

describe('RemoveFileUploadControler', () => {
    test('Should call validation with correct values', async () => {
        const { sut, validationSpy } = makeSut()
        await sut.handle(makeFakeHttpRequest())
        expect(validationSpy.input).toEqual(makeFakeHttpRequest())
    })

    // test('Should return 400 if Validation fails', async () => {
    //     const { sut, validationSpy } = makeSut()
    //     validationSpy.error = new Error()
    //     const httpResponse = await sut.handle(makeFakeHttpRequest())
    //     expect(httpResponse).toEqual(badRequest(validationSpy.error))
    // })

    // test('Should call AddContent with correct values', async () => {
    //     const { sut, addContentSpy } = makeSut()
    //     await sut.handle(makeFakeHttpRequest())
    //     expect(addContentSpy.params).toEqual(makeFakeHttpRequest())
    // })

    // test('Should return 500 if AddContent throws', async () => {
    //     const { sut, addContentSpy } = makeSut()
    //     jest.spyOn(addContentSpy, 'add').mockRejectedValueOnce(throwError)
    //     const httpResponse = await sut.handle(makeFakeHttpRequest())
    //     expect(httpResponse).toEqual(serverError(new Error()))
    // })

    // test('Should return 200 on success', async () => {
    //     const { sut } = makeSut()
    //     const httpResponse = await sut.handle(makeFakeHttpRequest())
    //     expect(httpResponse).toEqual(noContent())
    // })
})


