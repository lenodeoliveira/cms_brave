import { badRequest, noContent, serverError } from '@/presentation/helpers/http/http-helpers'
import { FileUploadController } from '@/presentation/controller/file-upload/file-upload-controller'
import { ValidationSpy } from '../../mocks/mock-validation'
import { RemoveFileSpy } from '../../mocks/mock-files'

const makeFakeHttpRequest = (): FileUploadController.Result =>({
    originalname: 'any_original_name',
    mimetype: 'any_mime_type',
    filename: 'any_file_name',
    size: 11111,
    userId: 'any_id',
})

type SutTypes = {
  sut: FileUploadController
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
    const validationSpy = new ValidationSpy()
    const sut = new FileUploadController(validationSpy)

    return {
        sut,
        validationSpy,
    }
}

describe('RemoveFileUploadControler', () => {
    test('Should call validation with correct values', async () => {
        const { sut, validationSpy } = makeSut()
        await sut.handle(makeFakeHttpRequest())
        expect(validationSpy.input).toEqual({
            mimetype: 'any_mime_type',
            size: 11111,
        })
    })

    test('Should return 400 if Validation fails', async () => {
        const { sut, validationSpy } = makeSut()
        validationSpy.error = new Error()
        const httpResponse = await sut.handle(makeFakeHttpRequest())
        expect(httpResponse).toEqual(badRequest(validationSpy.error))
    })

    // test('Should call RemoveFile with correct values', async () => {
    //     const { sut, removeFileSpy } = makeSut()
    //     await sut.handle(makeFakeHttpRequest())
    //     expect(removeFileSpy.params).toEqual(makeFakeHttpRequest().image)
    // })

    // test('Should return 500 if RemoveFile throws', async () => {
    //     const { sut, removeFileSpy } = makeSut()
    //     jest.spyOn(removeFileSpy, 'removeFile').mockImplementation(() => {
    //         throw new Error()
    //     })
    //     const httpResponse = await sut.handle(makeFakeHttpRequest())
    //     expect(httpResponse).toEqual(serverError(new Error()))
    // })

    // test('Should return 200 on success', async () => {
    //     const { sut } = makeSut()
    //     const httpResponse = await sut.handle(makeFakeHttpRequest())
    //     expect(httpResponse).toEqual(noContent())
    // })
})


