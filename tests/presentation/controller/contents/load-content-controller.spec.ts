import { LoadContentController } from '@/presentation/controller/contents/load-content-controller'
import { noContent, ok, serverError } from '@/presentation/helpers/http/http-helpers'
import { throwError } from '@/../tests/domain/test-helpers'
import { LoadContentSpy } from '../../mocks/mock-content'
import MockDate from 'mockdate'

type SutTypes = {
  sut: LoadContentController
  loadContentSpy: LoadContentSpy
}

const makeFakeRequest = (): LoadContentController.Request => ({
    slug: 'any_slug'
})

const makeSut = (): SutTypes => {
    const loadContentSpy = new LoadContentSpy()
    const sut = new LoadContentController(loadContentSpy)
    return {
        sut,
        loadContentSpy
    }
}


describe('LoadContent Controller', () => {
    beforeAll(() => {
        MockDate.set(new Date())
    })

    afterAll(() => {
        MockDate.reset()
    })

    test('Should call LoadContent with correct value', async () => {
        const { sut, loadContentSpy } = makeSut()
        const request = makeFakeRequest()
        await sut.handle(request)
        expect(loadContentSpy.slug).toEqual(request.slug)
    })
})