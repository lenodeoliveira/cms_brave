import { LoadContentsRepositorySpy, makeFakeContents } from '@/../tests/data/mocks/mock-db-content'
import { DbLoadContents } from '@/data/usecases/content/db-load-contents'
import { throwError } from '@/../tests/domain/test-helpers'
import MockDate from 'mockdate'

type SutType = {
  sut: DbLoadContents
  loadContentsRepositorySpy: LoadContentsRepositorySpy
}

const makeSut = (): SutType => {
    const loadContentsRepositorySpy = new LoadContentsRepositorySpy()
    const sut = new DbLoadContents(loadContentsRepositorySpy)
    return {
        sut,
        loadContentsRepositorySpy
    }
}

describe('DbLoadContents Usecase', () => {
    beforeAll(() => {
        MockDate.set(new Date())
    })

    afterAll(() => {
        MockDate.reset()
    })

    test('Should return a list of contents', async () => {
        const { sut, loadContentsRepositorySpy } = makeSut()
        await sut.load({
            page: 1,
            limit: 2,
        })
        expect(loadContentsRepositorySpy.result).toEqual(makeFakeContents())
    })

    test('Should throw if LoadContentRepositorySpy throws', async () => {
        const { sut, loadContentsRepositorySpy } = makeSut()
        jest.spyOn(loadContentsRepositorySpy, 'loadAll').mockImplementationOnce(throwError)
        const promise = sut.load({
            page: 1,
            limit: 2,
        })
        await expect(promise).rejects.toThrow()
    })
})