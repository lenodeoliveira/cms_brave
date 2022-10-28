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
})