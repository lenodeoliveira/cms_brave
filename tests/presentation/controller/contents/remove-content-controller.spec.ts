import { RemoveContentSpy } from '../../mocks/mock-content'
import { RemoveContentController } from '@/presentation/controller/contents/remove-content-controller'

type SutTypes = {
  sut: RemoveContentController
  removeContentSpy: RemoveContentSpy
}

const makeFakeRequest = (): RemoveContentController.Result => ({
    id: 'any_id'
})

const makeSut = (): SutTypes => {
    const removeContentSpy = new RemoveContentSpy()
    const sut = new RemoveContentController(removeContentSpy)
    return {
        sut,
        removeContentSpy
    }
}

describe('RemoveContent Controller', () => {
    test('Should call RemoveContent with correct values', async () => {
        const { sut, removeContentSpy } = makeSut()
        const request = makeFakeRequest()
        await sut.handle(request)
        expect(removeContentSpy.id).toEqual(request.id)
    })
})