import { AddContentController } from '@/presentation/controller/contents/add-content-controller'
import { ValidationSpy } from '../../mocks/mock-validation'

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
}

const makeSut = (): SutTypes => {
    const validationSpy = new ValidationSpy()
    const sut = new AddContentController(validationSpy)

    return {
        sut,
        validationSpy
    }
}

describe('AddContentController', () => {
    test('Should call validation with correct values', async () => {
        const { sut, validationSpy } = makeSut()
        await sut.handle(makeFakeHttpRequest())
        expect(validationSpy.input).toEqual(makeFakeHttpRequest())
    })
})



