import { UpdateContentSpy } from '../../mocks/mock-content'
import { UpdateContentController } from '@/presentation/controller/contents/update-content-controller'
import { throwError } from '@/../tests/domain/test-helpers'
import { noContent, notFound, serverError } from '@/presentation/helpers/http/http-helpers'

type SutTypes = {
  sut: UpdateContentController
  updateContentSpy: UpdateContentSpy
}

const makeFakeRequest = (): UpdateContentController.Result => ({
    id: 'any_id'
})

const makeSut = (): SutTypes => {
    const updateContentSpy = new UpdateContentSpy()
    const sut = new UpdateContentController(updateContentSpy)
    return {
        sut,
        updateContentSpy
    }
}


describe('UpdateContent Controller', () => {
    test('Should call UpdateContent with correct values', async () => {
        const { sut, updateContentSpy } = makeSut()
        const request = makeFakeRequest()
        await sut.handle(request)
        expect(updateContentSpy.id).toEqual(request.id)
    })

    test('Should return 204 on success', async () => {
        const { sut } = makeSut()
        const httpRequest = await sut.handle(makeFakeRequest())
        expect(httpRequest).toEqual(noContent())
    })
})