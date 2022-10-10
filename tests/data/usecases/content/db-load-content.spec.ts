import { LoadContentRepositorySpy, makeFakeContent } from '@/../tests/data/mocks/mock-db-content'
import { DbLoadContent } from '@/data/usecases/content/db-load-content'
import MockDate from 'mockdate'

type SutType = {
  sut: DbLoadContent
  loadContentRepositorySpy: LoadContentRepositorySpy
}

const makeSut = (): SutType => {
    const loadContentRepositorySpy = new LoadContentRepositorySpy()
    const sut = new DbLoadContent(loadContentRepositorySpy)
    return {
        sut,
        loadContentRepositorySpy
    }
}

describe('DbLoadContent Usecase', () => {
    beforeAll(() => {
        MockDate.set(new Date())
    })

    afterAll(() => {
        MockDate.reset()
    })

    test('Should return a content', async () => {
        const { sut, loadContentRepositorySpy } = makeSut()
        await sut.loadOne('any_slug')
        expect(loadContentRepositorySpy.result).toEqual(makeFakeContent())
    })
})