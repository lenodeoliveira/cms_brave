import { LoadContentsByAdminController } from '@/presentation/controller/contents/load-contents-by-admin-controller'
import { noContent } from '@/presentation/helpers/http/http-helpers'
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

    test('Should return 204 if LoadContentsByAdmin returns null', async () => {
        const { sut, loadContentsByAdminSpy } = makeSut()
        loadContentsByAdminSpy.result = null
        const httpResponse = await sut.handle({ id: 'any_id'})
        expect(httpResponse).toEqual(noContent())
    })
})