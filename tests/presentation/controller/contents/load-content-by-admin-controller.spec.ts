import { LoadContentByAdminController } from '@/presentation/controller/contents/load-content-by-admin-controller'
import { LoadContentByAdminSpy } from '../../mocks/mock-content'

type SutTypes = {
  sut: LoadContentByAdminController
  loadContentByAdminSpy: LoadContentByAdminSpy
}

const makeSut = (): SutTypes => {
    const loadContentByAdminSpy = new LoadContentByAdminSpy()
    const sut = new LoadContentByAdminController(loadContentByAdminSpy)

    return {
        sut,
        loadContentByAdminSpy,
    }
}

describe('LoadContentByAdmin Controller', () => {
    test('Should call LoadContentByAdmin with correct values', async () => {
        const { sut, loadContentByAdminSpy } = makeSut()
        await sut.handle({id: 'any_id'})
        expect(loadContentByAdminSpy.id).toBe('any_id')
    })
})