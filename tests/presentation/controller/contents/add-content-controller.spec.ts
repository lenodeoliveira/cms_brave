import { badRequest } from '@/presentation/helpers/http/http-helpers'
import { AddContentController } from '@/presentation/controller/contents/add-content-controller'
import { ValidationSpy } from '../../mocks/mock-validation'
import { AddContentSpy } from '../../mocks/mock-content'

const makeFakeHttpRequest = (): AddContentController.Result =>({
    title: 'any_title',
    slug: 'any_slug',
    image: 'link_url',
    body: 'any_content',
    published: 0,
})

type SutTypes = {
  sut: AddContentController
  validationSpy: ValidationSpy
  addContentSpy: AddContentSpy
}

const makeSut = (): SutTypes => {
    const validationSpy = new ValidationSpy()
    const addContentSpy = new AddContentSpy()
    const sut = new AddContentController(validationSpy, addContentSpy)

    return {
        sut,
        validationSpy,
        addContentSpy
    }
}

describe('AddContentController', () => {
    test('Should call validation with correct values', async () => {
        const { sut, validationSpy } = makeSut()
        await sut.handle(makeFakeHttpRequest())
        expect(validationSpy.input).toEqual(makeFakeHttpRequest())
    })

    test('Should return 400 if Validation fails', async () => {
        const { sut, validationSpy } = makeSut()
        validationSpy.error = new Error()
        const httpResponse = await sut.handle(makeFakeHttpRequest())
        expect(httpResponse).toEqual(badRequest(validationSpy.error))
    })

    test('Should call AddContent with correct values', async () => {
        const { sut, addContentSpy } = makeSut()
        await sut.handle(makeFakeHttpRequest())
        expect(addContentSpy.params).toEqual(makeFakeHttpRequest())
    })
})



