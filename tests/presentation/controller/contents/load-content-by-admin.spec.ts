import { LoadContentsByAdminController } from '@/presentation/controller/contents/load-contents-by-admin-controller'
import { LoadContentsByAdminSpy } from '../../mocks/mock-content'

type SutTypes = {
  sut: LoadContentsByAdminController
  loadContentsByAdminSpy: LoadContentsByAdminSpy
}

const makeSut = (): SutTypes => {
    const loadContentsByAdminSpy = new LoadContentsByAdminSpy()
    const sut = new LoadContentsByAdminController(loadContentsByAdminSpy)
    return {
        sut,
        loadContentsByAdminSpy
    }
}

describe('LoadContentsByAdmin Controller', () => {
    test('Should call LoadContentsByAdmin with correct values', async () => {
        const { sut, loadContentsByAdminSpy } = makeSut()
        await sut.handle({
            id: 'any_id'
        })
        expect(loadContentsByAdminSpy.params).toEqual({ id: 'any_id' })
    })
})