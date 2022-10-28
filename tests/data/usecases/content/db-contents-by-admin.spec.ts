import { throwError } from '@/../tests/domain/test-helpers'
import { DbLoadContentsByAdmin } from '@/data/usecases/content/db-load-contents-by-admin'
import { LoadContentsByAdminRepositorySpy } from '../../mocks/mock-db-content'


type SutTypes = {
    sut: DbLoadContentsByAdmin,
    loadContentsByAdminRepositorySpy: LoadContentsByAdminRepositorySpy
}

const makeSut = (): SutTypes => {
    const loadContentsByAdminRepositorySpy = new LoadContentsByAdminRepositorySpy()
    const sut = new DbLoadContentsByAdmin(loadContentsByAdminRepositorySpy)
    return {
        sut,
        loadContentsByAdminRepositorySpy
    }
}

describe('DbLoadContentsByAdmin Usecase', () => {
    test('Should call LoadContentsByAdminRepository with correct values', async () => {
        const { sut, loadContentsByAdminRepositorySpy } = makeSut()
        await sut.load({ id: 'any_id' })
        expect(loadContentsByAdminRepositorySpy.params).toEqual({id: 'any_id'})
    })

    test('Should return the contents', async () => {
        const { sut, loadContentsByAdminRepositorySpy } = makeSut()
        const contents = await sut.load({id: 'any_id'})
        expect(contents).toEqual(loadContentsByAdminRepositorySpy.result)
    })

    test('Should return null if there is no content', async () => {
        const { sut, loadContentsByAdminRepositorySpy } = makeSut()
        loadContentsByAdminRepositorySpy.result = null
        const contents = await sut.load({id: 'any_id'})
        expect(contents).toBeNull()
    })

    test('Should throw if LoadContentsByAdminRepository throws', async () => {
        const { sut, loadContentsByAdminRepositorySpy } = makeSut()
        jest.spyOn(loadContentsByAdminRepositorySpy, 'loadContents').mockImplementationOnce(throwError)
        const promise = sut.load({id: 'any_id'})
        await expect(promise).rejects.toThrow()
    })
})
