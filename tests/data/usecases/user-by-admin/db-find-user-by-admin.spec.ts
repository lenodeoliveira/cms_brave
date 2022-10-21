import { DbFindUsersByAdmin } from '@/data/usecases/user-by-admin/db-find-users-by-admin'
import { FindUserByAdminRepositorySpy } from '../../mocks'

type SutTypes = {
  sut: DbFindUsersByAdmin
  findUserByAdminRepositorySpy: FindUserByAdminRepositorySpy
}

const makeSut = (): SutTypes => {
    const findUserByAdminRepositorySpy = new FindUserByAdminRepositorySpy()
    const sut = new DbFindUsersByAdmin(findUserByAdminRepositorySpy)
    return {
        sut,
        findUserByAdminRepositorySpy
    }
}

describe('DbFindUsersByAdmin Usecase', () => {
    test('Should call DbFindUsersByAdmin with correct values', async () => {
        const { sut, findUserByAdminRepositorySpy } = makeSut()
        await sut.findUsers({ page: 2, limit: 2 })
        expect(findUserByAdminRepositorySpy.params).toEqual({ page: 2, limit: 2 })
    })
})