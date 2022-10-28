import { throwError } from '@/../tests/domain/test-helpers'
import { LoadContentsByAdminController } from '@/presentation/controller/contents/load-contents-by-admin-controller'
import { noContent, ok, serverError } from '@/presentation/helpers/http/http-helpers'
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

    test('Should return 200 on success', async () => {
        const { sut, loadContentsByAdminSpy } = makeSut()
        const httpResponse = await sut.handle({ id: 'any_id' })
        expect(httpResponse).toEqual(ok(loadContentsByAdminSpy.result))
    })

    test('Should return 500 if LoadContentsByAdmin throws', async () => {
        const { sut, loadContentsByAdminSpy } = makeSut()
        jest.spyOn(loadContentsByAdminSpy, 'load').mockImplementationOnce(throwError)
        const httpResponse = await sut.handle({id: 'any_id'}) 
        expect(httpResponse).toEqual(serverError(new Error()))
    })
})