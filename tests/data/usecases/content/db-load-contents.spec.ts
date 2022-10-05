import { throwError } from '@/../tests/domain/test-helpers'
import { LoadContentsRepositorySpy, makeFakeContents } from '@/../tests/data/mocks/mock-db-content'
import { DbLoadContents } from '@/data/usecases/content/db-load-contents'
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
        await sut.load()
        expect(loadContentsRepositorySpy.result).toEqual(makeFakeContents())
    })

    // test('Should throw if AddContentRepository throws', async () => {
    //     const { sut, addContentRepositorySpy } = makeSut()
    //     jest.spyOn(addContentRepositorySpy, 'add').mockImplementationOnce(throwError)
    //     const promise = sut.add(makeFakeContent())
    //     await expect(promise).rejects.toThrow()
    // })
})