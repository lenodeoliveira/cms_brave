import { DbLoadContentByAdmin } from '@/data/usecases/content/db-load-content-by-admin'
import { LoadContentByAdminRepositorySpy } from '../../mocks/mock-db-content'


type SutTypes = {
  sut: DbLoadContentByAdmin
  loadContentByAdminRepository: LoadContentByAdminRepositorySpy
}

const makeSut = (): SutTypes => {
    const loadContentByAdminRepository = new LoadContentByAdminRepositorySpy()
    const sut = new DbLoadContentByAdmin(loadContentByAdminRepository)
  
    return {
        sut,
        loadContentByAdminRepository
    }
}

describe('DbLoadContentByAdmin UseCase', () => {
    test('Should call LoadContentByAdminRepository with correct values', async () => {
        const { sut, loadContentByAdminRepository } = makeSut()
        await sut.loadOneContent('any_id')
        expect(loadContentByAdminRepository.id).toBe('any_id')
    })

})